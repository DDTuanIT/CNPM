from marshmallow import Schema, fields, validate

#Get??? trước mắt cứ vầy đi ha
class appraisalReportSchema(Schema):
    appraisal_report_id = fields.UUID(required=True)
    message_info = fields.Str(required=True)
    estimatevalue = fields.Str(required=True) #Giá trị ước tính trước mắt là str nha
    conditionnotes = fields.Str(required=True)
    appraisal_date = fields.DateTime(required=True)
    appraisal_id = fields.UUID(required=True)
    watch_id = fields.UUID(required=True)

#Post???