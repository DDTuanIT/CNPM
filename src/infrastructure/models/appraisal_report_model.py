from sqlalchemy import Column, Integer, String, DateTime, Float
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class AppraisalReportModel(Base):
    __tablename__ = 'appraisal_report'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    appraisal_report_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    watch_id = Column(UNIQUEIDENTIFIER, nullable=False)
    appraiser_id = Column(UNIQUEIDENTIFIER, nullable=False)
    estimate_value = Column(Float, nullable=False)
    create_at = Column(DateTime)   
    description = Column(String(250), nullable=False)

    watch = relationship('WatchModel', foreign_keys='WatchModel.report_id', back_populates='report')