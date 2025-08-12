from sqlalchemy import Column, Integer, String, DateTime, Boolean
from infrastructure.databases.base import Base

class SupportTiket:
    def __init__(self, support_ticket_id: int, user_id: int, issue_description: str, create_at, response_at, status: str):
        self.support_ticket_id = support_ticket_id
        self.user_id = user_id
        self.issue_description = issue_description
        self.create_at = create_at
        self.response_at =response_at
        self.status = status
        