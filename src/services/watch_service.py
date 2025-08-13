from domain.models.watch import Watch
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.iwatch_repository import IWatchRepository
from typing import List, Optional

class WatchService:
    def __init__(self, repository: IWatchRepository):
        self.repository = repository

    def create_watch(self, watch_id: UNIQUEIDENTIFIER, seller_id: UNIQUEIDENTIFIER, name: str, brand: str, price: float, origin: str, model: str, produce_at , status: str, image: str, report_id: UNIQUEIDENTIFIER) -> Watch:
        watch = Watch(watch_id=watch_id, seller_id=seller_id, name=name, brand=brand, price=price, origin=origin, model=model, produce_at=produce_at, status=status, image=image, report_id=report_id)
        return self.repository.add(watch)

    def get_watch(self, watch_id: UNIQUEIDENTIFIER) -> Optional[Watch]:
        return self.repository.get_by_id(watch_id)

    def list_watchs(self) -> List[Watch]:
        return self.repository.list()

    def update_watch(self, watch_id: UNIQUEIDENTIFIER, seller_id: UNIQUEIDENTIFIER, name: str, brand: str, price: float, origin: str, model: str, produce_at , status: str, image: str, report_id: UNIQUEIDENTIFIER) -> Watch:
        watch = Watch(watch_id=watch_id, seller_id=seller_id, name=name, brand=brand, price=price, origin=origin, model=model, produce_at=produce_at, status=status, image=image, report_id=report_id)
        return self.repository.update(watch)

    def delete_watch(self, watch_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(watch_id) 