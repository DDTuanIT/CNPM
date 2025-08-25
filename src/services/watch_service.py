from infrastructure.models.watch_model import WatchModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.iwatch_repository import IWatchRepository
from typing import List, Optional

class WatchService:
    def __init__(self, repository: IWatchRepository):
        self.repository = repository

    def create_watch(self, watch_id: UNIQUEIDENTIFIER, seller_id: UNIQUEIDENTIFIER, name: str, brand: str, price: float, origin: str, model: str, produce_at , status: str, image: str, description: str, appraisal_report_id: UNIQUEIDENTIFIER) -> WatchModel:
        watch = WatchModel(watch_id=watch_id, seller_id=seller_id, name=name, brand=brand, price=price, origin=origin, model=model, produce_at=produce_at, status=status, image=image, description=description,appraisal_report_id=appraisal_report_id)
        return self.repository.add(watch)

    def get_watch(self, watch_id: UNIQUEIDENTIFIER) -> Optional[WatchModel]:
        return self.repository.get_by_id(watch_id)

    def list_watchs(self) -> List[WatchModel]:
        return self.repository.list()

    def update_watch(self, watch_id: UNIQUEIDENTIFIER, seller_id: UNIQUEIDENTIFIER, name: str, brand: str, price: float, origin: str, model: str, produce_at , status: str, image: str, description: str,appraisal_report_id: UNIQUEIDENTIFIER) -> WatchModel:
        watch = WatchModel(watch_id=watch_id, seller_id=seller_id, name=name, brand=brand, price=price, origin=origin, model=model, produce_at=produce_at, status=status, image=image, description=description,appraisal_report_id=appraisal_report_id)
        return self.repository.update(watch)

    def delete_watch(self, watch_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(watch_id) 