from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session
from infrastructure.repositories.appraisal_report_repository import AppraisalReportRepository
from services.appraisal_report import AppraisalReportService
from api.schemas.appraisal_report_schema import appraisalReportSchema
from infrastructure.models.appraisal_report_model import AppraisalReportModel

arappraisal_report_bp = Blueprint("appraisal_report", __name__, url_prefix="/api")


def _service():
    db = get_db_session()
    repository = AppraisalReportRepository(db)
    return AppraisalReportService(repository)


def _bad_request(msg: str):
    return jsonify({"success": False, "error": msg}), 400
 

@arappraisal_report_bp.route("/appraisalReport", methods=["GET"])
def list_appraisal_reports():
    try:
        service = _service()
        reports = service.list_appraisal_reports()
        return jsonify(appraisalReportSchema(many=True).dump(reports)), 200
    except Exception as e:
        import traceback; traceback.print_exc()
        return _bad_request(str(e))

@arappraisal_report_bp.route("/appraisalReport", methods=["POST"])
def create_appraisal_report():
    try:
        payload = appraisalReportSchema().load(request.get_json(force=True) or {})

        service = _service()
        service.create_appraisal_report(
            appraisal_report_id=payload["appraisal_report_id"],
            watch_id=payload["watch_id"],
            appraiser_id=payload["appraisal_id"],
            estimate_value=float(payload["estimatevalue"]),
            create_at=payload["appraisal_date"],
            description=payload["conditionnotes"],
        )

        return jsonify({
            "success": True,
            "message": "Tạo báo cáo định giá thành công."
        }), 201
    except Exception as e:
        import traceback; traceback.print_exc()
        return _bad_request(str(e))


