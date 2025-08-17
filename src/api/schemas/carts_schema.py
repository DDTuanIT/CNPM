from marshmallow import Schema, fields, validate

class CartsSchema(Schema):
    cart_id = fields.UUID(required=True)
    user_id = fields.UUID(required=True)