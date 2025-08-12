from domain.models.feedback import Feedback
from domain.models.ifeedback_repository import IFeedbackRepository
from typing import List, Optional

class FeedbackService:
    def __init__(self, repository: IFeedbackRepository):
        self.repository = repository

    def create_feedback(self, feedback_id: int, buyer_id: int, send_date, rating: float, content: str) -> Feedback:
        feedback = Feedback(feedback_id=feedback_id, buyer_id=buyer_id, send_date=send_date, rating=rating, content=content)
        return self.repository.add(feedback)

    def get_feedback(self, feedback_id: int) -> Optional[Feedback]:
        return self.repository.get_by_id(feedback_id)

    def list_feedbacks(self) -> List[Feedback]:
        return self.repository.list()

    def update_feedback(self, feedback_id: int, buyer_id: int, send_date, rating: float, content: str) -> Feedback:
        feedback = Feedback(feedback_id=feedback_id, buyer_id=buyer_id, send_date=send_date, rating=rating, content=content)
        return self.repository.update(feedback)

    def delete_feedback(self, feedback_id: int) -> None:
        self.repository.delete(feedback_id) 