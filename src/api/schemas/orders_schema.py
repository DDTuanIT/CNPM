from marshmallow import Schema, fields

# GET
class WatchSchema(Schema):
    watch_id = fields.UUID()
    name = fields.Str()
    brand = fields.Str()
    price = fields.Float()
    origin = fields.Str()
    model = fields.Str()
    produce_at = fields.DateTime()
    status = fields.Str()
    image = fields.Str()
    description = fields.Str()
    report_id = fields.UUID()

class OrderItemsSchema(Schema):
    id = fields.UUID()
    watch = fields.Nested(WatchSchema) 
    quantity = fields.Integer()
    estimate_delivery_time = fields.DateTime()

class OrdersSchema(Schema):
    order_id = fields.UUID()
    user_id = fields.UUID()
    order_time = fields.DateTime()
    total_cost = fields.Float()
    items = fields.List(fields.Nested(OrderItemsSchema))


# POST
class OrderItemPostSchema(Schema):
    id = fields.UUID(required=True)
    order_id = fields.UUID(required=False)
    watch_id = fields.UUID(required=True)
    quantity = fields.Int(required=True)
    estimate_delivery_time = fields.DateTime(required=False)

class OrderPostSchema(Schema):
    order_id = fields.UUID(required=True)
    user_id = fields.UUID(required=True)
    order_time = fields.DateTime(required=True)
    total_cost = fields.Float(required=True)
    items = fields.List(fields.Nested(OrderItemPostSchema))