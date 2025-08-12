from abc import ABC, abstractmethod
from .feedback import Feedback
from typing import List, Optional

class IFeedbackRepository(ABC):
    @abstractmethod
    def add(self, feedback: Feedback) -> Feedback:
        pass

    @abstractmethod
    def get_by_id(self, feedback_id: int) -> Optional[Feedback]:
        pass

    @abstractmethod
    def list(self) -> List[Feedback]:
        pass

    @abstractmethod
    def update(self, feedback: Feedback) -> Feedback:
        pass

    @abstractmethod
    def delete(self, feedback_id: int) -> None:
        pass 
