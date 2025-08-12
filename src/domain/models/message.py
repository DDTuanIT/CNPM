from sqlalchemy import Column, Integer, String, DateTime, Boolean
from infrastructure.databases.base import Base

class Message:
    def __init__(self, message_id: int, content: str, create_at, sender_id: int, receiver_id: int):
        self.message_id = message_id
        self.content = content
        self.create_at = create_at
        self.sender_id = sender_id
        self.receiver_id = receiver_id
        