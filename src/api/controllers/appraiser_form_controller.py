from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.repositories.appraiser_form_repository import AppraiserFormRepository
from services.appraiser_form_service import AppraiserFormService
from api.schemas.appraiser_form_schemas import appraiserFormSchemas


appraiser_form_bp = Blueprint("appraiser_form", __name__, url_prefix="/api")

@appraiser_form_bp.route("/AppraiserForm", methods=["GET"])
def getWatch():
    try:
        db = get_db_session()
        watch_repo = AppraiserFormRepository(db)
        watch_service = AppraiserFormService(watch_repo)
        watches = watch_service.list_appraiser_forms()
        return jsonify(appraiserFormSchemas(many=True).dump(watches)), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

@appraiser_form_bp.route("/AppraiserForm", methods=['POST'])
def postWatch():
    try:
        data = appraiserFormSchemas().load(request.json)
        db = get_db_session()
        watch_repo = AppraiserFormRepository(db)
        service = AppraiserFormService(watch_repo)
        service.create_appraiser_form(
            data['appraiser_form_id'],
            data['user_id'],
            data['phone_number'],
            data['email'],
            data['address'],
            data['current_job'],
            data['experience_years'],
            data['certificate']
        )
        return jsonify({"sucess": True, "message": "Create appraisal form successful"}), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400


    