from abc import ABC, abstractmethod
from .appraisal_report import AppraisalReport
from typing import List, Optional

class IAppraisalReportRepository(ABC):
    @abstractmethod
    def add(self, appraisal_report: AppraisalReport) -> AppraisalReport:
        pass

    @abstractmethod
    def get_by_id(self, appraisal_report_id: int) -> Optional[AppraisalReport]:
        pass

    @abstractmethod
    def list(self) -> List[AppraisalReport]:
        pass

    @abstractmethod
    def update(self, appraisal_report: AppraisalReport) -> AppraisalReport:
        pass

    @abstractmethod
    def delete(self, appraisal_report_id: int) -> None:
        pass 
