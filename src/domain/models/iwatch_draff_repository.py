from abc import ABC, abstractmethod
from .watch_draff import WatchDraff
from typing import List, Optional

class IWatchDraffRepository(ABC):
    @abstractmethod
    def add(self, watchDraff: WatchDraff) -> WatchDraff:
        pass

    @abstractmethod
    def get_by_id(self, watch_id: int) -> Optional[WatchDraff]:
        pass

    @abstractmethod
    def list(self) -> List[WatchDraff]:
        pass

    @abstractmethod
    def update(self, watchDraff: WatchDraff) -> WatchDraff:
        pass

    @abstractmethod
    def delete(self, watch_id: int) -> None:
        pass 
