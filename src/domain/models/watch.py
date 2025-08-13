from sqlalchemy import Column, Integer, String, DateTime, Boolean, Float
from infrastructure.databases.base import Base

class Watch:
    def __init__(self, watch_id: int, seller_id: int, name: str, brand: str, price: float, origin: str, model: str, produce_at, status: str, image: str, description: str,report_id: int):
        self.watch_id = watch_id
        self.seller_id = seller_id
        self.name = name
        self.brand = brand
        self.price = price
        self.origin = origin
        self.model = model
        self.produce_at = produce_at
        self.status = status
        self.image = image
        self.description = description
        self.report_id = report_id
