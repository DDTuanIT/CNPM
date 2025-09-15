from marshmallow import Schema, fields, validate

class appraiserFormSchemas(Schema):
    appraiser_form_id = fields.UUID(required=True)
    user_id = fields.UUID(required=True)
    phone_number = fields.Integer(required=True)
    email = fields.String(required=True)
    address = fields.Str(required=True)
    current_job = fields.String(required=True)
    experience_years = fields.String(required=True)
    certificate = fields.String(required=True)