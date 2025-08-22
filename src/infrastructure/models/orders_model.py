from sqlalchemy import Column, BigInteger, Float, ForeignKey
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from infrastructure.databases.base import Base
from sqlalchemy.orm import relationship

class OrdersModel(Base):
    __tablename__ = 'orders'
    __table_args__ = {'extend_existing': True}

    order_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    user_id = Column(UNIQUEIDENTIFIER, ForeignKey('user.user_id'), nullable=False)
    order_time = Column(BigInteger, nullable=False)
    total_cost = Column(Float, nullable=False)

    order_items = relationship('OrderItemsModel', foreign_keys='OrderItemsModel.order_id', back_populates='order')
    user_order = relationship('UserModel', foreign_keys=[user_id], back_populates='orders')
