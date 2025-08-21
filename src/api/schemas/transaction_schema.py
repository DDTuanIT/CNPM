from marshmallow import Schema, fields
from marshmallow.validate import Length

class TransactionSchema(Schema):
    transaction_id = fields.UUID(required=True)
    buyer_id = fields.UUID(required=True)
    watch_id = fields.UUID(required=True)
    watch_price = fields.Float(required=True)
    purchase_date = fields.DateTime(required=True)
    transaction_status = fields.Str(required=True, validate=Length(max=10))
    escrow = fields.Float(required=True)
    feedback_id = fields.UUID(allow_none=True)
