import random
from services.redis_service import RedisService
from services.email_service import EmailService

class OTPService:
    def __init__(self):
        self.redis = RedisService()

    def generate_and_send_otp(self, email: str):
        otp = str(random.randint(100000, 999999))
        self.redis.set(email, otp)
        EmailService.send_email(
            email,
            "Your OTP Code",
            f"Your OTP code is {otp}. It will expire in 5 minutes."
        )
        return otp 

    def verify_otp(self, email: str, otp: str):
        stored = self.redis.get(email)
        if stored and stored == otp:
            self.redis.delete(email)
            return True
        return False
