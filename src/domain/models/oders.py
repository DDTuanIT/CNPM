from sqlalchemy import Column, Integer, String, DateTime,  Float
from infrastructure.databases.base import Base

def Orders(self, order_id: str, user_id: str, order_time: int, total_cost: float):
    self.order_id = order_id
    self.user_id = user_id
    self.order_time = order_time
    self.total_cost = total_cost
