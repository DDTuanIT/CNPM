# src/services/message_service.py
from __future__ import annotations

from datetime import datetime
from typing import Any, Dict, List, Optional
from infrastructure.models.message_model import MessageModel
from flask import Blueprint

message_bp = Blueprint("message_api", __name__)


# ===== In-memory store =====
_MESSAGES: List[MessageModel] = []
_NEXT_ID: int = 1


# ===== Helpers =====
def _to_dict(m: MessageModel) -> Dict[str, Any]:
    return {
        "message_id": m.message_id,
        "content": m.content,
        "create_at": m.create_at.isoformat() if hasattr(m.create_at, "isoformat") else m.create_at,
        "sender_id": m.sender_id,
        "receiver_id": m.receiver_id,
    }


def _parse_dt(value: Any) -> datetime:
    if isinstance(value, datetime):
        return value
    if isinstance(value, str):
        return datetime.fromisoformat(value)
    raise ValueError("create_at must be ISO 8601 string (e.g. 2025-08-23T01:45:00) or datetime")


# ===== Public APIs =====
def list_messages() -> List[Dict[str, Any]]:
    """Return all messages as list[dict]."""
    return [_to_dict(m) for m in _MESSAGES]


def get_message(message_id: int) -> Optional[Dict[str, Any]]:
    """Return one message by id as dict; None if not found."""
    for m in _MESSAGES:
        if m.message_id == int(message_id):
            return _to_dict(m)
    return None


def create_message(payload: Dict[str, Any]) -> Dict[str, Any]:
    """
    Create a message.
    Required keys: content (str), sender_id (int), receiver_id (int)
    Optional: create_at (ISO 8601 str or datetime)
    """
    global _NEXT_ID

    if not isinstance(payload, dict):
        raise ValueError("Payload must be a JSON object")

    content = (payload.get("content") or "").strip()
    if not content:
        raise ValueError("Missing or invalid 'content'")

    try:
        sender_id = int(payload["sender_id"])
        receiver_id = int(payload["receiver_id"])
    except (KeyError, TypeError, ValueError):
        raise ValueError("Missing or invalid 'sender_id' / 'receiver_id' (must be integers)")

    create_at = payload.get("create_at")
    create_at = _parse_dt(create_at) if create_at is not None else datetime.utcnow()

    msg = MessageModel(
        message_id=_NEXT_ID,
        content=content,
        create_at=create_at,
        sender_id=sender_id,
        receiver_id=receiver_id,
    )
    _NEXT_ID += 1
    _MESSAGES.append(msg)
    return _to_dict(msg)


def update_message(message_id: int, payload: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    """
    Partial update for a message.
    Allowed keys: content, sender_id, receiver_id, create_at.
    """
    if not isinstance(payload, dict):
        raise ValueError("Payload must be a JSON object")

    for m in _MESSAGES:
        if m.message_id == int(message_id):
            if "content" in payload:
                content = (payload["content"] or "").strip()
                if not content:
                    raise ValueError("Invalid 'content'")
                m.content = content

            if "sender_id" in payload:
                m.sender_id = int(payload["sender_id"])

            if "receiver_id" in payload:
                m.receiver_id = int(payload["receiver_id"])

            if "create_at" in payload:
                m.create_at = _parse_dt(payload["create_at"])

            return _to_dict(m)

    return None


def delete_message(message_id: int) -> bool:
    """Delete a message by id. Return True if deleted, else False."""
    for i, m in enumerate(_MESSAGES):
        if m.message_id == int(message_id):
            _MESSAGES.pop(i)
            return True
    return False