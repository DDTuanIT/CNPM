from abc import ABC, abstractmethod
from .watch import Watch
from typing import List, Optional

class IWatchRepository(ABC):
    @abstractmethod
    def add(self, watch: Watch) -> Watch:
        pass

    @abstractmethod
    def get_by_id(self, watch_id: int) -> Optional[Watch]:
        pass

    @abstractmethod
    def list(self) -> List[Watch]:
        pass

    @abstractmethod
    def update(self, watch: Watch) -> Watch:
        pass

    @abstractmethod
    def delete(self, watch_id: int) -> None:
        pass 
