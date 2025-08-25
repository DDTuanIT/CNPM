from marshmallow import Schema, fields, validate

class watchDraffSchema(Schema):
    watch_id = fields.UUID(required=True)
    seller_id = fields.UUID(required=True)
    name = fields.Str(required=True)
    brand = fields.Str(required=True)
    price = fields.Float(required=True)
    origin = fields.Str(required=True)
    model = fields.Str(required=True)
    produce_at = fields.Date(required=True)
    status = fields.Str(required=True)
    image = fields.Str(required=True)
    description = fields.Str(required=True)

