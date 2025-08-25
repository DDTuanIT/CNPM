from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session
from infrastructure.repositories.message_repository import MessageRepository
from services.message_service import MessageService
from api.schemas.message_schema import messageSchema

message_bp = Blueprint("message", __name__, url_prefix="/api")


def _service():
    db = get_db_session()
    repo = MessageRepository(db)
    return MessageService(repo)


@message_bp.route("/message", methods=["GET"])
def get_messages():
    try:
        service = _service()
        messages = service.list_messages()
        return jsonify(messageSchema(many=True).dump(messages)), 200
    except Exception as e:
        import traceback; traceback.print_exc()
        return jsonify({"error": str(e)}), 400


@message_bp.route("/message", methods=["POST"])
def create_message():
    try:
        data = messageSchema().load(request.get_json(force=True) or {})

        service = _service()
        service.create_message(
            message_id=data["message_id"],
            content=data["content"],     
            create_at=data["create_at"],  
            sender_id=data["sender_id"],   
            receiver_id=data["receiver_id"]
        )

        return jsonify({"success": True, "message": "Add message successful"}), 201
    except Exception as e:
        import traceback; traceback.print_exc()
        return jsonify({"error": str(e)}), 400
