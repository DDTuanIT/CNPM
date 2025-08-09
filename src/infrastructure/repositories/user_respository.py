from infrastructure.models.user_model import User
from sqlalchemy.orm import Session

class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_email(self, email: str):
        return self.db.query(User).filter(User.email == email).first()

    def create_user(self, email: str, password: str, role: str):
        new_user = User(email=email, password=password, role=role)
        self.db.add(new_user)
        self.db.commit()
        return new_user

    def verify_user(self, email: str, password: str):
        return self.db.query(User).filter(User.email == email, User.password == password).first()
