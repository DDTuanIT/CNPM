import redis
from config import Config

class RedisService:
    def __init__(self):
        self.client = redis.StrictRedis(
            host=Config.REDIS_HOST,
            port=Config.REDIS_PORT,
            db=Config.REDIS_DB,
            decode_responses=True
        )

    def set(self, key, value, ex=Config.OTP_EXPIRE_SECONDS):
        self.client.set(key, value, ex=ex)

    def get(self, key):
        return self.client.get(key)

    def delete(self, key):
        self.client.delete(key)
