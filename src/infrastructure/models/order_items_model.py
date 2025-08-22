from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from infrastructure.databases.base import Base
from sqlalchemy.orm import relationship

class OrderItemsModel(Base):
    __tablename__ = 'order_items'
    __table_args__ = {'extend_existing': True}

    id = Column(Integer, primary_key=True)
    order_id = Column(UNIQUEIDENTIFIER, ForeignKey('orders.order_id'), nullable=False)
    watch_id = Column(UNIQUEIDENTIFIER, ForeignKey('watch.watch_id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    estimate_delivery_time = Column(DateTime, nullable=True)

    order = relationship('OrdersModel', foreign_keys=[order_id], back_populates='order_items')
    watch = relationship('WatchModel', foreign_keys=[watch_id])
