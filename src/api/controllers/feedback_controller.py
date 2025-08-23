from flask import Blueprint, request, jsonify
from api.schemas.feedback_schema import Feedbackschema
from domain.models.feedback import Feedback
from services.feedback_service import FeedbackService
from infrastructure.repositories.feedback_repository import FeedbackRepository

feedback_bp = Blueprint("feedback", __name__, url_prefix="/feedback")

# Khởi tạo service + repository
repository = FeedbackRepository()
service = FeedbackService(repository)
schema = Feedbackschema()
schemas = Feedbackschema(many=True)

# GET /feedback -> lấy tất cả feedback
@feedback_bp.route("/feedBack", methods=["GET"])
def get_feedbacks():
    feedbacks = service.list_feedbacks()
    return jsonify(schemas.dump(feedbacks)), 200

# POST /feedback -> tạo feedback mới
@feedback_bp.route("/feedBack", methods=["POST"])
def create_feedback():
    try:
        data = schema.load(request.json)
    
        feedBack = service.create_feedback(
            data["feedback_id"],
            data["buyer_id"],
            data["send_date"],
            data["rating"],
            data["content"]
        )
        return jsonify('add item to successful'), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400