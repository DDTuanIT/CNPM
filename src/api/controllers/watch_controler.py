from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.repositories.watch_repository import WatchRepository
from services.watch_service import WatchService
from api.schemas.watch_schema import watchSchema
from infrastructure.models.watch_model import WatchModel

watch_bp = Blueprint("watch", __name__, url_prefix="/api")

@watch_bp.route("/watches", methods=["GET"])
def getWatch():
    try:
        db = get_db_session()
        watch_repo = WatchRepository(db)
        watch_service = WatchService(watch_repo)
        watches = watch_service.list_watchs()
        return jsonify(watchSchema(many=True).dump(watches)), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

@watch_bp.route("/postWatch", methods=['POST'])
def postWatch():
    try:
        data = watchSchema().load(request.json)
        db = get_db_session
        watch_repo = WatchRepository(db)
        service = WatchService(watch_repo)
        
        service.create_watch(
            data['watch_id'],
            data['seller']
        )
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400
