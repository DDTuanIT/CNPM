from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey, TEXT
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class AppraiserFormModel(Base):
    __tablename__ = 'appraiser_form'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    appraiser_form_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    user_id = Column(UNIQUEIDENTIFIER, ForeignKey('user.user_id'), nullable=False)
    phone_number = Column(Integer, nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    address = Column(String(30), nullable=True)
    current_job = Column(TEXT, nullable=True)
    experience_years = Column(Integer, nullable=False)
    certificate = Column(String(200), nullable=False)

    user_appraiser_form = relationship('UserModel', back_populates='appraiser_form')