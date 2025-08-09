class UserService:
    def __init__(self, user_repository):
        self.user_repository = user_repository

    def register(self, email, password, role):
        existing_user = self.user_repository.get_by_email(email)
        if existing_user:
            raise Exception("Email đã được dùng")

        return self.user_repository.create_user(email, password, role)

    def login(self, email, password):
        user = self.user_repository.verify_user(email, password)
        if not user:
            raise Exception("Sai thông tin đăng nhập")

        return {"email": user.email, "role": user.role}
