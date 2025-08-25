from infrastructure.models.watch_draff_model import WatchDraffModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.iwatch_draff_repository import IWatchDraffRepository
from typing import List, Optional

class WatchDraffService:
    def __init__(self, repository: IWatchDraffRepository):
        self.repository = repository

    def create_watch(self, watch_id: UNIQUEIDENTIFIER, seller_id: UNIQUEIDENTIFIER, name: str, brand: str, price: float, origin: str, model: str, produce_at , status: str, image: str, description: str) -> WatchDraffModel:
        watch = WatchDraffModel(watch_id=watch_id, seller_id=seller_id, name=name, brand=brand, price=price, origin=origin, model=model, produce_at=produce_at, status=status, image=image, description=description)
        return self.repository.add(watch)

    def get_watch(self, watch_id: UNIQUEIDENTIFIER) -> Optional[WatchDraffModel]:
        return self.repository.get_by_id(watch_id)

    def list_watchs(self) -> List[WatchDraffModel]:
        return self.repository.list()

    def update_watch(self, watch_id: UNIQUEIDENTIFIER, seller_id: UNIQUEIDENTIFIER, name: str, brand: str, price: float, origin: str, model: str, produce_at , status: str, image: str, description: str) -> WatchDraffModel:
        watchDraff = WatchDraffModel(watch_id=watch_id, seller_id=seller_id, name=name, brand=brand, price=price, origin=origin, model=model, produce_at=produce_at, status=status, image=image, description=description)
        return self.repository.update(watchDraff)

    def delete_watch(self, watch_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(watch_id) 