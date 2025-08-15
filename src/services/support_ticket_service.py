from infrastructure.models.support_ticker_model import SupportTicketModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.isupport_ticket_repository import ISupportTicketRepository
from typing import List, Optional

class SupportTicketService:
    def __init__(self, repository: ISupportTicketRepository):
        self.repository = repository

    def create_support_ticket(self, support_ticket_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER, issue_description: str, create_at, response_at, status: str) -> SupportTicketModel:
        support_ticket = SupportTicketModel(support_ticket_id=support_ticket_id, user_id=user_id, issue_description=issue_description, create_at=create_at, response_at=response_at, status=status)
        return self.repository.add(support_ticket)

    def get_support_ticket(self, support_ticket_id: UNIQUEIDENTIFIER) -> Optional[SupportTicketModel]:
        return self.repository.get_by_id(support_ticket_id)

    def list_support_tickets(self) -> List[SupportTicketModel]:
        return self.repository.list()

    def update_support_ticket(self, support_ticket_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER, issue_description: str, create_at, response_at, status: str) -> SupportTicketModel:
        support_ticket = SupportTicketModel(support_ticket_id=support_ticket_id, user_id=user_id, issue_description=issue_description, create_at=create_at, response_at=response_at, status=status)
        return self.repository.update(support_ticket)

    def delete_support_ticket(self, support_ticket_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(support_ticket_id) 