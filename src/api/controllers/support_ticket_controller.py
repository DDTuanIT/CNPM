from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session
from infrastructure.repositories.support_ticket_repository import SupportTicketModelRepository
from services.support_ticket_service import SupportTicketService
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER

# Create blueprint
support_ticket_bp = Blueprint('support_ticket', __name__)

@support_ticket_bp.route('/api/support_ticket', methods=['GET'])
def get_support_tickets():
    try:
        db = get_db_session()
        repo = SupportTicketModelRepository(db)
        service = SupportTicketService(repo)
        tickets = service.list_support_tickets()
        result = [ticket.to_dict() for ticket in tickets] if tickets else []
        return jsonify(result), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

@support_ticket_bp.route('/api/support_ticket', methods=['POST'])
def create_support_ticket():
    try:
        from api.schemas.support_ticket_schema import SupportTicketSchema
        data = SupportTicketSchema().load(request.json)
        db = get_db_session()
        repo = SupportTicketModelRepository(db)
        service = SupportTicketService(repo)
        # Lấy các trường cần thiết từ request
        support_ticket_id = data.get('support_ticket_id')
        user_id = data.get('user_id')
        issue_description = data.get('issue_description')
        create_at = data.get('create_at')
        response_at = data.get('response_at')
        status = data.get('status')
        
        # Create ticket
        ticket = service.create_support_ticket(
            support_ticket_id,
            user_id,
            issue_description,
            create_at,
            response_at,
            status
        )
        return jsonify(ticket.to_dict()), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400
