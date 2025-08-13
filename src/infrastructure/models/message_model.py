from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from sqlalchemy.orm import relationship
from infrastructure.databases.base import Base

class MessageModel(Base):
    __tablename__ = 'message'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    message_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    content = Column(String(250), nullable=False)
    create_at = Column(DateTime)
    sender_id = Column(UNIQUEIDENTIFIER,ForeignKey('user.user_id') ,nullable=False)
    receiver_id = Column(UNIQUEIDENTIFIER,ForeignKey('user.user_id'),nullable=False)

    sender = relationship('UserModel', foreign_keys=[sender_id], back_populates='send')
    receiver = relationship('UserModel', foreign_keys=[receiver_id], back_populates='receive')