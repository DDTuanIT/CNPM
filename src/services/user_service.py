from infrastructure.models.user_model import UserModel
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.iuser_reposiory import IUserRepository
from typing import List, Optional
class UserService:

    def __init__(self, repository: IUserRepository):
        self.repository = repository

    def create_user(self, user_id: UNIQUEIDENTIFIER, user_name: str, full_name: str,user_password: str, address: str, email: str, phone_number: str, role_name: str) -> UserModel:
        user = UserModel(user_id=user_id, user_name=user_name, full_name=full_name,user_password=user_password, address=address, email=email, phone_number=phone_number, role_name=role_name)
        return self.repository.add(user)    
    
    def get_user(self, user_id: UNIQUEIDENTIFIER) -> Optional[UserModel]:
        return self.repository.get_by_id(user_id)

    def get_user_name(self, user_name: str) -> Optional[UserModel]:
     return self.repository.get_by_user_name(user_name)
    
    def get_user_email(self, email: str) -> Optional[UserModel]:
     return self.repository.get_by_user_email(email)
    
    def list_users(self) -> List[UserModel]:
        return self.repository.list()

    def update_user(self, user_id: UNIQUEIDENTIFIER,user_name: str, full_name: str,user_password: str, address: str, email: str, phone_number: str, role_name: str) -> UserModel:
        user = UserModel(user_id = user_id,user_name=user_name, full_name=full_name,user_password=user_password, address=address, email=email, phone_number=phone_number, role_name=role_name)
        return self.repository.update(user)

    def delete_user(self, user_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(user_id) 
    
    def get_user_email(self, email: str) -> Optional[UserModel]:
        return self.repository.get_by_user_email(email)