from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey, TEXT
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base
class AppraisalReportModel(Base):
    __tablename__ = 'appraisal_report'

    appraisal_report_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    watch_id = Column(UNIQUEIDENTIFIER, ForeignKey('watch_draff.watch_id', ondelete="CASCADE"),nullable=True)
    appraiser_id = Column(UNIQUEIDENTIFIER, nullable=False)
    estimate_value = Column(Float, nullable=False)
    create_at = Column(DateTime)   
    description = Column(TEXT, nullable=False)

    watch = relationship(
        'WatchModel',
        back_populates='report',
        uselist=False
    )

    watchDraff = relationship('WatchDraffModel',foreign_keys=[watch_id] , back_populates='reportWatchDraff') 