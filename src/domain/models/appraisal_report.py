from sqlalchemy import Column, Integer, String, DateTime, Boolean
from infrastructure.databases.base import Base

class AppraisalReport:
    def  __init__(self, appraisal_report_id: int, watch_id: int, appraiser_id: int, estimate_value: float, create_at, description: str):
        self.appraisal_report_id = appraisal_report_id
        self.watch_id = watch_id
        self.appraiser_id = appraiser_id
        self.estimate_value = estimate_value
        self.create_at = create_at
        self.description = description