from abc import ABC, abstractmethod
from .appraiser_form import AppraiserForm
from typing import List, Optional

class IAppraiserFormRepository(ABC):
    @abstractmethod
    def add(self, AppraiserForm: AppraiserForm) -> AppraiserForm:
        pass

    @abstractmethod
    def get_by_id(self, watch_id: int) -> Optional[AppraiserForm]:
        pass

    @abstractmethod
    def list(self) -> List[AppraiserForm]:
        pass

    @abstractmethod
    def update(self, AppraiserForm: AppraiserForm) -> AppraiserForm:
        pass

    @abstractmethod
    def delete(self, watch_id: int) -> None:
        pass 
