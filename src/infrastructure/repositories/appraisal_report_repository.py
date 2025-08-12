from domain.models.iappraisal_repository import IAppraisalReportRepository
from domain.models.appraisal_report import AppraisalReport
from typing import List, Optional
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import Config
from sqlalchemy import Column, Integer, String, DateTime
from infrastructure.databases import Base
from sqlalchemy.orm import Session
from infrastructure.models.appraisal_report_model import AppraisalReportModel
from infrastructure.databases.mssql import session

class AppraisalReportRepository(IAppraisalReportRepository):
	def __init__(self, session: Session = session):
		self.appraisal_reports = []
		self.__id__counter = 1
		self.session = session

	def add(self, appraisal_report: AppraisalReport) -> AppraisalReport:
		try:
			self.session.add(appraisal_report)   
			self.session.commit()    
			self.session.refresh(appraisal_report)
			return appraisal_report
		except Exception:
			self.session.rollback()   
			raise ValueError('appraisal_report not found')
		finally:
			self.session.close()      

	def get_by_id(self, appraisal_report_id: int) -> Optional[AppraisalReport]:
		return self.session.query(AppraisalReport).filter_by(id=appraisal_report_id).first()

	def list(self) -> List[AppraisalReport]:
		self._appraisal_reports = session.query(AppraisalReport).all()
		return self._appraisal_reports

	def update(self, appraisal_report: AppraisalReport) -> AppraisalReport:
		try:
			self.session.merge(appraisal_report)
			self.session.commit()
			return appraisal_report
		except Exception:
			self.session.rollback()
			raise ValueError('appraisal_report not found')
		finally:
			self.session.close()
			
	def delete(self, appraisal_report_id: int) -> None:
		appraisal_report = self.get_by_id(appraisal_report_id)
		if appraisal_report:
			self.session.delete(appraisal_report)
			self.session.commit()