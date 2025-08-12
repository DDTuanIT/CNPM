from domain.models.appraisal_report import AppraisalReport
from domain.models.iappraisal_repository import IAppraisalReportRepository
from typing import List, Optional

class AppraisalReportService:
    def __init__(self, repository: IAppraisalReportRepository):
        self.repository = repository

    def create_appraisal_report(self, appraisal_report_id: int, watch_id: int, appraiser_id: int, estimate_value: float, create_at, description: str) -> AppraisalReport:
        appraisal_report = AppraisalReport(appraisal_report_id=appraisal_report_id,watch_id=watch_id, appraiser_id=appraiser_id, estimate_value=estimate_value, create_at=create_at, description=description)
        return self.repository.add(appraisal_report)

    def get_appraisal_report(self, appraisal_report_id: int) -> Optional[AppraisalReport]:
        return self.repository.get_by_id(appraisal_report_id)

    def list_appraisal_reports(self) -> List[AppraisalReport]:
        return self.repository.list()

    def update_appraisal_report(self, appraisal_report_id: int, watch_id: int, appraiser_id: int, estimate_value: float, create_at, description: str) -> AppraisalReport:
        appraisal_report = AppraisalReport(appraisal_report_id=appraisal_report_id,watch_id=watch_id, appraiser_id=appraiser_id, estimate_value=estimate_value, create_at=create_at, description=description)
        return self.repository.update(appraisal_report)

    def delete_appraisal_report(self, appraisal_report_id: int) -> None:
        self.repository.delete(appraisal_report_id) 