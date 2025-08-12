from sqlalchemy import Column, Integer, String, DateTime, Boolean
from infrastructure.databases.base import Base

class Feedback:
    def __init__(self, feedback_id: int, buyer_id: int, send_date, rating: float, content: str ):
        self.feedback_id = feedback_id
        self.buyer_id = buyer_id
        self.send_date = send_date
        self.rating = rating
        self.content = content
        