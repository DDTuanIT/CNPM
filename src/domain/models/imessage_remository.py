from abc import ABC, abstractmethod
from .message import Message
from typing import List, Optional

class IMessageRepository(ABC):
    @abstractmethod
    def add(self, message: Message) -> Message:
        pass

    @abstractmethod
    def get_by_id(self, message_id: int) -> Optional[Message]:
        pass

    @abstractmethod
    def list(self) -> List[Message]:
        pass

    @abstractmethod
    def update(self, message: Message) -> Message:
        pass

    @abstractmethod
    def delete(self, message_id: int) -> None:
        pass 
