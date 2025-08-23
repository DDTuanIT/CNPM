from sqlalchemy import Column, Integer, String, DateTime,  Float
from infrastructure.databases.base import Base

def OrderItems(self, id: int, order_id: str, watch_id: int, quantity: int, estimate_delivery_time: int):
    self.id = id
    self.order_id = order_id
    self.watch_id = watch_id
    self.quantity = quantity
    self.estimate_delivery_time = estimate_delivery_time
