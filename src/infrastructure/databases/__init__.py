from infrastructure.databases.mssql import init_mssql
from infrastructure.models import todo_model, watch_model, user_model, transaction_model, support_ticket, message_model, feedback_model, appraisal_report_model, carts_model, cart_items_model, watch_draff_model

def init_db(app):
    init_mssql(app)
    
from infrastructure.databases.mssql import Base