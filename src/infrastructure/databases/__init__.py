from infrastructure.databases.mssql import init_mssql
from infrastructure.models import watch_model, user_model, transaction_model, support_ticket, message_model, feedback_model, appraisal_report_model, carts_model, cart_items_model, watch_draff_model, appraiser_form_model

def init_db(app):
    init_mssql(app)
    
from infrastructure.databases.mssql import Base