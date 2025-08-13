from domain.models.user import User
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
from domain.models.iuser_reposiory import IUserRepository
from typing import List, Optional
class UserService:

    def __init__(self, repository: IUserRepository):
        self.repository = repository
    '''
    def register(self, email, password, role):
        existing_user = self.repository.get_by_email(email)
        if existing_user:
            raise Exception("Email đã được dùng")

        return self.repository.create_user(email, password, role)

    def login(self, email, password):
        user = self.repository.verify_user(email, password)
        if not user:
            raise Exception("Sai thông tin đăng nhập")
        return {"email": user.email, "role": user.role}
    '''
    def create_user(self, user_id: UNIQUEIDENTIFIER, user_name: str, user_password: str, address: str, email: str, phone_number: str, role_name: str) -> User:
        user = User(user_id=user_id, user_name=user_name, user_password=user_password, address=address, email=email, phone_number=phone_number, role_name=role_name)
        return self.repository.add(user)    
    def get_user(self, user_id: UNIQUEIDENTIFIER) -> Optional[User]:
        return self.repository.get_by_id(user_id)

    def list_users(self) -> List[User]:
        return self.repository.list()

    def update_user(self, user_id: UNIQUEIDENTIFIER, user_name: str, user_password: str, address: str, email: str, phone_number: str, role_name: str) -> User:
        user = User(user_id=user_id,  user_name=user_name, user_password=user_password, address=address, email=email, phone_number=phone_number, role_name=role_name)
        return self.repository.update(user)

    def delete_user(self, user_id: UNIQUEIDENTIFIER) -> None:
        self.repository.delete(user_id) 