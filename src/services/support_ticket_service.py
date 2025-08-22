from datetime import datetime
import uuid
from domain.models.support_ticket import SupportTicket
from domain.models.isupport_ticket_repository import ISupportTicketRepository
from typing import List, Optional

class SupportTicketService:
    def __init__(self, repository: ISupportTicketRepository):
        self.repository = repository

    def create_support_ticket(self, support_ticket_id: str = None, user_id: str = None, issue_description: str = None, create_at: datetime = None, response_at: Optional[datetime] = None, status: str = None) -> SupportTicket:
        try:
            # Tạo mới hoặc validate UUID
            if not support_ticket_id:
                support_ticket_id = str(uuid.uuid4())
            else:
                # Kiểm tra và chuyển đổi thành UUID hợp lệ
                uuid_obj = uuid.UUID(support_ticket_id)
                support_ticket_id = str(uuid_obj)
        except ValueError:
            # Nếu UUID không hợp lệ, tạo một UUID mới
            support_ticket_id = str(uuid.uuid4())
        support_ticket = SupportTicket(
            support_ticket_id=support_ticket_id,
            user_id=user_id,
            issue_description=issue_description,
            create_at=create_at,
            response_at=response_at,
            status=status
        )
        return self.repository.add(support_ticket)

    def get_support_ticket(self, support_ticket_id: str) -> Optional[SupportTicket]:
        return self.repository.get_by_id(support_ticket_id)

    def list_support_tickets(self) -> List[SupportTicket]:
        return self.repository.list()

    def update_support_ticket(self, support_ticket_id: str, user_id: str, issue_description: str, create_at: datetime, response_at: Optional[datetime], status: str) -> SupportTicket:
        support_ticket = SupportTicket(
            support_ticket_id=support_ticket_id,
            user_id=user_id,
            issue_description=issue_description,
            create_at=create_at,
            response_at=response_at,
            status=status
        )
        return self.repository.update(support_ticket)

    def delete_support_ticket(self, support_ticket_id: str) -> None:
        self.repository.delete(support_ticket_id)