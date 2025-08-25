

from sqlalchemy import Column, TEXT, String, DateTime, Float, ForeignKey
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class WatchDraffModel(Base):
    __tablename__ = 'watch_draff'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này
    
    watch_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    seller_id = Column(UNIQUEIDENTIFIER, nullable=False)
    name = Column(String(100), nullable=False)
    brand = Column(String(50), nullable=True)
    price = Column(Float, nullable=False)
    origin = Column(String(50), nullable=True)
    model = Column(String(50), nullable=True)
    produce_at = Column(DateTime)
    status = Column(String(10), nullable=False)
    image = Column(String(50), nullable=False)
    description = Column(TEXT, nullable=True)

    reportWatchDraff = relationship('AppraisalReportModel', foreign_keys='AppraisalReportModel.watch_id', back_populates='watchDraff')