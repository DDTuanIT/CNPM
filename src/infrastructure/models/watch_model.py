

from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class WatchModel(Base):
    __tablename__ = 'watch'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    watch_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    seller_id = Column(UNIQUEIDENTIFIER, ForeignKey('user.user_id'),nullable=False)
    name = Column(String(100), nullable=False)
    brand = Column(String(50), nullable=True)
    price = Column(Float, nullable=False)
    orgin = Column(String(50), nullable=True)
    model = Column(String(50), nullable=True)
    produce_at = Column(DateTime)
    status = Column(String(10), nullable=False)
    image = Column(String(50), nullable=False)
    description = Column(String(250), nullable=True)
    report_id = Column(UNIQUEIDENTIFIER, ForeignKey('appraisal_report.appraisal_report_id'),nullable=True)

    # one to one
    transaction = relationship('TransactionModel', foreign_keys='TransactionModel.watch_id',back_populates='watch', uselist=False)
    # one to many
    seller = relationship('UserModel', foreign_keys=[seller_id],back_populates='sell')
    report = relationship('AppraisalReportModel', foreign_keys=[report_id], back_populates='watch')

    