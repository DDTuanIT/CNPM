from marshmallow import Schema, fields

class SupportTicketSchema(Schema):
    support_ticket_id = fields.String(required=False)  # Không bắt buộc, sẽ được tạo tự động
    user_id = fields.String(required=True)
    issue_description = fields.String(required=True)
    create_at = fields.DateTime(required=True)
    response_at = fields.DateTime(allow_none=True)
    status = fields.String(required=True)
