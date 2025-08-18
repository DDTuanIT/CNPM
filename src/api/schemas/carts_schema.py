from marshmallow import Schema, fields, validate

#get
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

class CartItemsSchema(Schema):
    id = fields.UUID()
    watch = fields.Nested(WatchSchema)
    quantity = fields.Integer()

class CartsSchema(Schema):
    cart_id = fields.UUID()
    user_id = fields.UUID()

    items = fields.List(fields.Nested(CartItemsSchema))

#post
class CartItemPostSchema(Schema):
    id = fields.UUID(required=True)
    cart_id = fields.UUID(required=False)   
    watch_id = fields.UUID(required=True)
    quantity = fields.Int(required=True)

class CartPostSchema(Schema):
    cart_id = fields.UUID(required=True)
    user_id = fields.UUID(required=True)
    items = fields.List(fields.Nested(CartItemPostSchema))