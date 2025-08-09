from marshmallow import Schema, fields, validate

class RegisterSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True, validate=validate.Length(min=4))
    role = fields.Str(required=True, validate=validate.OneOf([
        "seller", "buyer", "appraiser", "admin", "support"
    ]))

class LoginSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True)
