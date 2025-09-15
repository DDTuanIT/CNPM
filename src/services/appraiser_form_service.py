from infrastructure.models.appraiser_form_model import AppraiserFormModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.iappraiser_form_repository import IAppraiserFormRepository
from typing import List, Optional

class AppraiserFormService:
    def __init__(self, repository: IAppraiserFormRepository):
        self.repository = repository

    def create_appraiser_form(self, appraiser_form_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER, phone_number: int, email: str, address: str, current_job: str, experience_years: int, certificate: str  ) -> AppraiserFormModel:
        appraiserForm = AppraiserFormModel(appraiser_form_id=appraiser_form_id, user_id=user_id, phone_number=phone_number, email=email, address=address, current_job=current_job, experience_years=experience_years, certificate=certificate)
        return self.repository.add(appraiserForm)

    def get_appraiser_form(self, appraiser_form_id: UNIQUEIDENTIFIER) -> Optional[AppraiserFormModel]:
        return self.repository.get_by_id(appraiser_form_id)

    def list_appraiser_forms(self) -> List[AppraiserFormModel]:
        return self.repository.list()

    def update_appraiser_form(self,  appraiser_form_id: UNIQUEIDENTIFIER, user_id: UNIQUEIDENTIFIER, phone_number: int, email: str, address: str, current_job: str, experience_years: int, certificate: str) -> AppraiserFormModel:
        appraiserForm = AppraiserFormModel(appraiser_form_id=appraiser_form_id, user_id=user_id, phone_number=phone_number, email=email, address=address, current_job=current_job, experience_years=experience_years, certificate=certificate)
        return self.repository.update(appraiserForm)

    def delete_appraiser_form(self, appraiser_form_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(appraiser_form_id) 
