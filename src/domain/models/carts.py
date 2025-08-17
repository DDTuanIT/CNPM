from sqlalchemy import Column, Integer, String, DateTime,  Float
from infrastructure.databases.base import Base

def  Carts(self, cart_id: int, user_id: int):
    self.cart_id = cart_id
    self.user_id = user_id