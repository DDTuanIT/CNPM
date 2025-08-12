from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from infrastructure.databases.base import Base
from sqlalchemy.orm import relationship

class FeedbackModel(Base):
    __tablename__ = 'feedback'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    feedback_id = Column(Integer, primary_key=True)
    buyer_id = Column(Integer,nullable=False)
    send_date = Column(DateTime)
    rating = Column(Float, nullable=False)
    content = Column(String(200), nullable=False)

    transaction = relationship('TransactionModel', foreign_keys='FeedbackModel.feedback_id',back_populates='feedback', uselist=False)