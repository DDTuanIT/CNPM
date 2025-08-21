from flask import Blueprint, request, jsonify
from infrastructure.databases.mssql import get_db_session
from infrastructure.repositories.transaction_repository import TransactionRepository
from services.transaction_service import TransactionService
from api.schemas.transaction_schema import TransactionSchema
from datetime import datetime

transaction_bp = Blueprint("transaction", __name__, url_prefix="/api")
transaction_schema = TransactionSchema()
transaction_list_schema = TransactionSchema(many=True)

@transaction_bp.route("/transactions", methods=["GET"])
def list_transactions():
    try:
        db = get_db_session()
        repo = TransactionRepository(db)
        service = TransactionService(repo)

        transactions = service.list_transactions()
        return jsonify(transaction_list_schema.dump(transactions)), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

@transaction_bp.route("/transactions/<uuid:transaction_id>", methods=["GET"])
def get_transaction(transaction_id):
    try:
        db = get_db_session()
        repo = TransactionRepository(db)
        service = TransactionService(repo)

        transaction = service.get_transaction(transaction_id)
        if not transaction:
            return jsonify({"error": "Transaction not found"}), 404
        return jsonify(transaction_schema.dump(transaction)), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

@transaction_bp.route("/transactions", methods=["POST"])
def create_transaction():
    try:
        data = transaction_schema.load(request.json)
        db = get_db_session()
        repo = TransactionRepository(db)
        service = TransactionService(repo)

        transaction = service.create_transaction(
            transaction_id=data["transaction_id"],
            buyer_id=data["buyer_id"],
            watch_id=data["watch_id"],
            watch_price=data["watch_price"],
            purchase_date=datetime.fromisoformat(data["purchase_date"]),
            transaction_status=data["transaction_status"],
            escrow=data["escrow"],
            feedback_id=data.get("feedback_id")
        )
        return jsonify(transaction_schema.dump(transaction)), 201
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

@transaction_bp.route("/transactions/<uuid:transaction_id>", methods=["PUT"])
def update_transaction(transaction_id):
    try:
        data = transaction_schema.load(request.json)
        db = get_db_session()
        repo = TransactionRepository(db)
        service = TransactionService(repo)

        transaction = service.update_transaction(
            transaction_id=transaction_id,
            buyer_id=data["buyer_id"],
            watch_id=data["watch_id"],
            watch_price=data["watch_price"],
            purchase_date=datetime.fromisoformat(data["purchase_date"]),
            transaction_status=data["transaction_status"],
            escrow=data["escrow"],
            feedback_id=data.get("feedback_id")
        )
        return jsonify(transaction_schema.dump(transaction)), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400

@transaction_bp.route("/transactions/<uuid:transaction_id>", methods=["DELETE"])
def delete_transaction(transaction_id):
    try:
        db = get_db_session()
        repo = TransactionRepository(db)
        service = TransactionService(repo)

        service.delete_transaction(transaction_id)
        return jsonify({"message": "Transaction deleted successfully"}), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 400
