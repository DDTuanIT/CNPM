from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from infrastructure.databases.base import Base
from sqlalchemy.orm import relationship

class CartsModel(Base):
    __tablename__ = 'carts'
    __table_args__ = {'extend_existing': True}  # Thêm dòng này

    cart_id = Column(UNIQUEIDENTIFIER, primary_key=True)
    user_id = Column(UNIQUEIDENTIFIER, ForeignKey('user.user_id'),nullable=False)

    cart_items = relationship('CartItemsModel', foreign_keys='CartItemsModel.cart_id',back_populates='carts')
    user_cart = relationship('UserModel', foreign_keys=[user_id], back_populates='carts')