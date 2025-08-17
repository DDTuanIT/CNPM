import smtplib
from email.mime.text import MIMEText
from config import Config

class EmailService:
    @staticmethod
    def send_email(to_email: str, subject: str, body: str):
        msg = MIMEText(body, "plain", "utf-8")
        msg["Subject"] = subject
        msg["From"] = Config.SENDER_EMAIL
        msg["To"] = to_email

        with smtplib.SMTP_SSL(Config.SMTP_SERVER, Config.SMTP_PORT) as server:
            server.login(Config.SENDER_EMAIL, Config.SENDER_PASSWORD)
            server.sendmail(Config.SENDER_EMAIL, [to_email], msg.as_string())
