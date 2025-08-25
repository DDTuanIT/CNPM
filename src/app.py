from flask import Flask, jsonify, request, make_response
from api.swagger import spec
from api.controllers.user_controller import user_bp
from api.controllers.carts_controller import cart_bp
from api.controllers.support_ticket_controller import support_ticket_bp
from api.controllers.watch_controler import watch_bp
from api.controllers.orders_controller import order_bp
from api.controllers.appraisal_report_controller import report_bp
from api.controllers.message_controller import message_bp
from api.controllers.watch_draff_controler import watch_draff_bp
from api.middleware import middleware
from api.responses import success_response
from infrastructure.databases import init_db
from config import Config
from flasgger import Swagger
from config import SwaggerConfig
from flask_swagger_ui import get_swaggerui_blueprint
from flask_cors import CORS




def create_app():
    app = Flask(__name__)

    CORS(app,
        resources={r"/*": {"origins": "http://localhost:5173"}},
        supports_credentials=True,
        allow_headers=["Content-Type", "Authorization"],
        methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])



    Swagger(app)
    # Đăng ký blueprint trước
    app.register_blueprint(user_bp)
    app.register_blueprint(cart_bp)
    app.register_blueprint(watch_bp)
    app.register_blueprint(order_bp)
    app.register_blueprint(support_ticket_bp)
    app.register_blueprint(report_bp)
    app.register_blueprint(message_bp)
    app.register_blueprint(watch_draff_bp)
     # Thêm Swagger UI blueprint
    SWAGGER_URL = '/docs'
    API_URL = '/swagger.json'
    swaggerui_blueprint = get_swaggerui_blueprint(
        SWAGGER_URL,
        API_URL,
        config={'app_name': "Todo API"}
    )
    app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)
    init_db(app)

    # Register middleware
    middleware(app)

    # Register routes
    # Example: app.add_url_rule('/example', view_func=example_view)
    # Tự động quét tất cả các route đã đăng ký
    with app.test_request_context():
        for rule in app.url_map.iter_rules():
            if rule.endpoint.startswith('todo.'):
                view_func = app.view_functions[rule.endpoint]
                print(f"Adding path: {rule.rule} -> {view_func}")
                spec.path(view=view_func)

    @app.route("/swagger.json")
    def swagger_json():
        return jsonify(spec.to_dict())

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=6868, debug=True)

