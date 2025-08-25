from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session 
from infrastructure.repositories.watch_draff_repository import WatchDraffRepository
from services.watch_draff_service import WatchDraffService
from api.schemas.watch_draff_schema import watchDraffSchema
from infrastructure.models.watch_model import WatchModel

watch_draff_bp = Blueprint("watch_draff", __name__, url_prefix="/api")

@watch_draff_bp.route("/watchDraff", methods=["GET"])
def getWatch():
    try:
        db = get_db_session()
        watch_repo = WatchDraffRepository(db)
        watch_service = WatchDraffService(watch_repo)
        watches = watch_service.list_watchs()
        return jsonify(watchDraffSchema(many=True).dump(watches)), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

@watch_draff_bp.route("/watchDraff", methods=['POST'])
def postWatch():
    try:
        data = watchDraffSchema().load(request.json)
        db = get_db_session()
        watch_repo = WatchDraffRepository(db)
        service = WatchDraffService(watch_repo)
        
        service.create_watch(
            data['watch_id'],
            data['seller_id'],
            data['name'],
            data['brand'],
            data['price'],
            data['origin'],
            data['model'],
            data['produce_at'],
            data['status'],
            data['image'],
            data['description']
        )
        return jsonify({"sucess": True, "message": "Add watch sucessful"}), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400
