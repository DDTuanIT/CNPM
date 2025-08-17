from sqlalchemy import Column, Integer, String, DateTime,  Float
from infrastructure.databases.base import Base

def  CartItems(self, id: int, cart_id: int, watch_id: int, quantity: int, delivery_option_id: int):
    self.id = id
    self.cart_id = cart_id
    self.watch_id = watch_id
    self.quantity = quantity
    self.deivery_option_id = delivery_option_id