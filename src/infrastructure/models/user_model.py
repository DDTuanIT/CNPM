from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from infrastructure.databases.base import Base
from sqlalchemy.orm import relationship


class UserModel(Base):
    __tablename__ = 'user'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    user_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    user_name = Column(String(18), nullable=False)
    user_password = Column(String(18), nullable=False)
    address = Column(String(30), nullable=True)
    email = Column(String(18), nullable=False)
    phone_number = Column(String(10), nullable=True)
    role_name = Column(String(10), nullable=False)

    # to transactionModel
    purchase = relationship('TransactionModel', foreign_keys='TransactionModel.buyer_id', back_populates='buyer')
    sell = relationship('WatchModel', foreign_keys='WatchModel.seller_id', back_populates='seller')
    support_ticket = relationship('SupportTicketModel', foreign_keys='SupportTicketModel.user_id', back_populates='user_ticket')

    send = relationship('MessageModel', foreign_keys='MessageModel.sender_id', back_populates='sender')
    receive = relationship('MessageModel', foreign_keys='MessageModel.receiver_id', back_populates='receiver')