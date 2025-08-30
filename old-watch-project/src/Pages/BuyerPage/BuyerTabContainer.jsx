import { Link } from "react-router-dom";

export function BuyerTabContainer() {
  return (
    <div className="tab-container">
      <div className="tab-nav">
        <button className="tab-btn active" data-tab="overview">
          📊 Tổng quan
        </button>
        <Link to="/buyer/products" className="tab-btn">
          <button data-tab="products">📦 Sản phẩm</button>
        </Link>
        <Link to="/buyer/wishlist" className="tab-btn">
          <button>❤️ Wishlist</button>
        </Link>
        <Link to="/buyer/cart" className="tab-btn">
          <button>🛒 Giỏ hàng</button>
        </Link>
        <Link to="/buyer/settings" className="tab-btn">
          <button>⚙️ Cài đặt</button>
        </Link>
      </div>

      <div className="tab-content active" id="overview">
        <div className="content-grid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Thao tác nhanh</h3>
            </div>
            <div className="card-content">
              <div className="quick-actions">
                <Link to="/buyer/products" className="quick-action-btn">
                  <button>
                    <span className="action-icon">🔍</span>
                    <span className="action-text">Khám phá sản phẩm</span>
                  </button>
                </Link>

                <Link to="/buyer/wishlist" className="quick-action-btn">
                  <button>
                    <span className="action-icon">❤️</span>
                    <span className="action-text">Xem Wishlist</span>
                  </button>
                </Link>

                <Link to="/buyer/cart" className="quick-action-btn">
                  <button>
                    <span className="action-icon">🛒</span>
                    <span className="action-text">Giỏ hàng</span>
                  </button>
                </Link>

                <Link to="/buyer/settings" className="quick-action-btn">
                  <button>
                    <span className="action-icon">⚙️</span>
                    <span className="action-text">Cài đặt</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
