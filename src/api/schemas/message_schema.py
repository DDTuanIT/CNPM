from marshmallow import Schema, fields, validate

#Get??? trước mắt cứ vầy đi ha
class messageSchema(Schema):
    message_id = fields.UUID(required=True)
    content = fields.Str(required=True)
    create_at = fields.DateTime(required=True)
    sender_id = fields.UUID(required=True)
    receiver_id = fields.UUID(required=True)

#Post???