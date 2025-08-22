from flask import Flask, jsonify, request, make_response
from api.swagger import spec
from api.controllers.todo_controller import bp as todo_bp
from api.controllers.user_controller import user_bp
from api.controllers.carts_controller import cart_bp
from api.controllers.support_ticket_controller import support_ticket_bp
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
    
    # Force application/json
    @app.before_request
    def force_json():
        if request.method == "POST":
            if not request.headers.get('Content-Type', '').startswith('application/json'):
                return jsonify({"error": "Content-Type header must be application/json"}), 415
                
    # Configure CORS
    CORS(app, supports_credentials=True)
    app.config['CORS_HEADERS'] = ['Content-Type']
    
    @app.after_request
    def add_cors_headers(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        if request.method == 'OPTIONS':
            response.status_code = 200
        return response
    Swagger(app)
    # Đăng ký blueprint trước
    app.register_blueprint(todo_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(cart_bp)
    app.register_blueprint(support_ticket_bp)
    
    # Print all registered routes
    print("\nRegistered Routes:")
    for rule in app.url_map.iter_rules():
        print(f"Route: {rule.rule} - Methods: {rule.methods}")
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
{
    "user_id": "550e8400-e29b-41d4-a716-446655440000",
    "issue_description": "Yêu cầu tư vấn về sản phẩm mã SP789",
    "create_at": "2025-08-23T15:00:00",
    "response_at": null,
    "status": "open"
}
if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=6868, debug=True)

