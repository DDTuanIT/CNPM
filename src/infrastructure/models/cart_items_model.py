from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float 
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from infrastructure.databases.base import Base
from sqlalchemy.orm import relationship

class CartItemsModel(Base):
    __tablename__ = 'cart_items'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    id =Column(UNIQUEIDENTIFIER, primary_key=True)
    cart_id = Column(UNIQUEIDENTIFIER, ForeignKey('carts.cart_id'), nullable=False)
    watch_id = Column(UNIQUEIDENTIFIER, ForeignKey('watch.watch_id'),nullable=False)
    quantity = Column(Integer, nullable=False)
    delivery_option_id = Column(Integer, nullable=False)

    carts = relationship('CartsModel', foreign_keys=[cart_id],back_populates='cart_items')

    watch = relationship('WatchModel', foreign_keys=[watch_id], back_populates='watch_cart')