from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class SupportTickerModel(Base):
    __tablename__ = 'support_ticket'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    support_ticket_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.user_id'),nullable=False)
    issue_description = Column(String(255), nullable=False)
    create_at = Column(DateTime)
    response_at = Column(DateTime)
    status = Column(String(10), nullable=False)

    user_ticket = relationship('UserModel', foreign_keys=[user_id], back_populates='support_ticket')