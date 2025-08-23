from marshmallow import Schema, fields

class FeedbackSchema(Schema):
    feedback_id = fields.UUID(required=True)
    buyer_id = fields.UUID(required=True)
    send_date = fields.DateTime(required=True)
    rating = fields.Float(required=True)
    content = fields.String(required=True)
