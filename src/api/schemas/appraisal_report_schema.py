from marshmallow import Schema, fields, validate

#Get??? trước mắt cứ vầy đi ha | Reply: =))) code j đâu kh v, sai form data
class appraisalReportSchema(Schema):
    appraisal_report_id = fields.UUID(required=True)
    watch_id = fields.UUID(required=True)
    appraiser_id = fields.UUID(required=True)
    estimate_value = fields.Float(required=True)
    create_at = fields.Date(required=True)
    description = fields.String(required=True)
