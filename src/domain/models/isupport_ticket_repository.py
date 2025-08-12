from abc import ABC, abstractmethod
from .support_ticket import SupportTicket
from typing import List, Optional

class ISupportTicketRepository(ABC):
    @abstractmethod
    def add(self, support_ticket: SupportTicket) -> SupportTicket:
        pass

    @abstractmethod
    def get_by_id(self, support_ticket_id: int) -> Optional[SupportTicket]:
        pass

    @abstractmethod
    def list(self) -> List[SupportTicket]:
        pass

    @abstractmethod
    def update(self, support_ticket: SupportTicket) -> SupportTicket:
        pass

    @abstractmethod
    def delete(self, support_ticket_id: int) -> None:
        pass 
