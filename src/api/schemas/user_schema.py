from marshmallow import Schema, fields, validate

class RegisterSchema(Schema):
    user_id = fields.UUID(required=True)
    user_name = fields.Str(required=True)
    user_password = fields.Str(required=True, validate=validate.Length(min=4))
    address = fields.Str(required=False, allow_none=True)
    email = fields.Email(required=True)
    phone_number = fields.Str(required=False, allow_none=True)
    role_name = fields.Str(required=True, validate=validate.OneOf([
        "seller", "buyer", "appraiser", "admin", "support"
    ]))


class LoginSchema(Schema):
    user_name = fields.Str(required=True)
    user_password = fields.Str(required=True, validate=validate.Length(min=4))
    
class Otp_ForgotPassword(Schema):
    otp = fields.Int(required=True)

class ChangePassword(Schema):
    new_password = fields.Str(required=True, validate=validate.Length(min=4))
    confirm_password = fields.Str(required=True, validate=validate.Length(min=4))