from marshmallow import Schema, fields, validate

class watchSchema(Schema):
    watch_id = fields.UUID(required=True)
    seller_id = fields.UUID(required=True)
    name = fields.Str(required=True)
    brand = fields.Str(required=True)
    price = fields.Float(required=True)
    orgin = fields.Str(required=True)
    momel = fields.Str(required=True)
    produce_at = fields.Date(required=True)
    status = fields.Str(required=True)
    image = fields.Str(required=True)
    description = fields.Str(required=True)
    report_id = fields.UUID(required=True)

