# src/api/controllers/appraisal_report_controller.py
from __future__ import annotations
from flask import Blueprint, request, jsonify
from datetime import datetime
from typing import Any, Dict, List, Optional


from infrastructure.models.appraisal_report_model import AppraisalReportModel 

report_bp = Blueprint("report_api", __name__)

# ===== In-memory store =====
_REPORTS: List[AppraisalReportModel] = []
_NEXT_ID: int = 1


# ===== Helpers =====
def _to_dict(r: AppraisalReportModel) -> Dict[str, Any]:
    return {
        "appraisal_report_id": r.appraisal_report_id,
        "watch_id": r.watch_id,
        "appraiser_id": r.appraiser_id,
        "estimate_value": r.estimate_value,
        "create_at": r.create_at.isoformat() if hasattr(r.create_at, "isoformat") else r.create_at,
        "description": r.description,
    }


def _parse_dt(value: Any) -> datetime:
    if isinstance(value, datetime):
        return value
    if isinstance(value, str):
        return datetime.fromisoformat(value)
    raise ValueError("create_at must be ISO 8601 string, e.g. 2025-08-23T01:45:00")


# ===== Routes =====
@report_bp.route("/", methods=["GET"])
def list_reports():
    """GET /reports/ → trả về tất cả appraisal reports"""
    return jsonify([_to_dict(r) for r in _REPORTS]), 200


@report_bp.route("/", methods=["POST"])
def create_report():
    """
    POST /reports/
    Body JSON (bắt buộc): watch_id, appraiser_id, estimate_value
    Tuỳ chọn: create_at (ISO 8601), description
    """
    global _NEXT_ID

    data = request.get_json(silent=True) or {}

    missing = [k for k in ("watch_id", "appraiser_id", "estimate_value") if k not in data]
    if missing:
        return jsonify({"error": f"Missing field(s): {', '.join(missing)}"}), 400

    try:
        watch_id = int(data["watch_id"])
        appraiser_id = int(data["appraiser_id"])
        estimate_value = float(data["estimate_value"])
    except (TypeError, ValueError):
        return jsonify({"error": "watch_id, appraiser_id phải là số nguyên; estimate_value phải là số"}), 400

    create_at_raw = data.get("create_at")
    try:
        create_at = _parse_dt(create_at_raw) if create_at_raw is not None else datetime.utcnow()
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400

    description = data.get("description")

    report = AppraisalReportModel(
        appraisal_report_id=_NEXT_ID,
        watch_id=watch_id,
        appraiser_id=appraiser_id,
        estimate_value=estimate_value,
        create_at=create_at,
        description=description,
    )
    _NEXT_ID += 1
    _REPORTS.append(report)

    return jsonify(_to_dict(report)), 201


@report_bp.route("/<int:report_id>", methods=["GET"])
def get_report(report_id: int):
    """GET /reports/<id>"""
    for r in _REPORTS:
        if r.appraisal_report_id == report_id:
            return jsonify(_to_dict(r)), 200
    return jsonify({"error": "Not found"}), 404


@report_bp.route("/<int:report_id>", methods=["PATCH", "PUT"])
def update_report(report_id: int):
    """
    PATCH/PUT /reports/<id>
    Cho phép đổi: watch_id, appraiser_id, estimate_value, create_at, description
    """
    data = request.get_json(silent=True) or {}

    for r in _REPORTS:
        if r.appraisal_report_id == report_id:
            if "watch_id" in data:
                r.watch_id = int(data["watch_id"])
            if "appraiser_id" in data:
                r.appraiser_id = int(data["appraiser_id"])
            if "estimate_value" in data:
                r.estimate_value = float(data["estimate_value"])
            if "create_at" in data:
                r.create_at = _parse_dt(data["create_at"])
            if "description" in data:
                r.description = data["description"]
            return jsonify(_to_dict(r)), 200

    return jsonify({"error": "Not found"}), 404


@report_bp.route("/<int:report_id>", methods=["DELETE"])
def delete_report(report_id: int):
    """DELETE /reports/<id>"""
    for i, r in enumerate(_REPORTS):
        if r.appraisal_report_id == report_id:
            _REPORTS.pop(i)
            return jsonify({"deleted": True}), 200
    return jsonify({"error": "Not found"}), 404

