import { Link } from "react-router-dom";

export function TabContainer() {
  return (
    <div className="tab-container">
      <div className="tab-nav">
        <button className="tab-btn active" data-tab="overview">
          📊 Tổng quan
        </button>
        <button className="tab-btn" data-tab="products">
          📦 Sản phẩm
        </button>
        <button className="tab-btn" data-tab="orders">
          🛒 Đơn hàng
        </button>
        <button className="tab-btn" data-tab="analytics">
          📈 Thống kê
        </button>
      </div>

      <div className="tab-content active" id="overview">
        <div className="content-grid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Thao tác nhanh</h3>
            </div>
            <div className="card-content">
              <div className="quick-actions">
                <Link to="/AddProductPage" className="quick-action-btn">
                  <button>
                    <span className="action-icon">➕</span>
                    <span className="action-text">Thêm sản phẩm</span>
                  </button>
                </Link>

                <Link to="/ProductManagePage" className="quick-action-btn">
                  <button>
                    <span className="action-icon">✏️</span>
                    <span className="action-text">Quản lý sản phẩm</span>
                  </button>
                </Link>

                <button
                  className="quick-action-btn"
                  //onclick="showPage('messages')"
                >
                  <span className="action-icon">💬</span>
                  <span className="action-text">Tin nhắn</span>
                </button>
                <button
                  className="quick-action-btn"
                  //onclick="showPage('settings')"
                >
                  <span className="action-icon">⚙️</span>
                  <span className="action-text">Cài đặt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content" id="products">
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h3 className="empty-title">Quản lý sản phẩm của bạn</h3>
          <p className="empty-description">
            Xem, chỉnh sửa và quản lý tất cả sản phẩm
          </p>
          <button
            className="btn btn-primary"
            //onclick="showPage('product-management')"
          >
            Đi đến trang quản lý sản phẩm
          </button>
        </div>
      </div>

      <div className="tab-content" id="orders">
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <h3 className="empty-title">Đơn hàng của bạn</h3>
          <p className="empty-description">Theo dõi và xử lý các đơn hàng</p>
          <button
            className="btn btn-primary" //onclick="showPage('orders')"
          >
            Xem tất cả đơn hàng
          </button>
        </div>
      </div>

      <div className="tab-content" id="analytics">
        <div className="empty-state">
          <div className="empty-icon">📈</div>
          <h3 className="empty-title">Báo cáo thống kê</h3>
          <p className="empty-description">
            Xem báo cáo chi tiết về doanh thu và hiệu suất
          </p>
          <button
            className="btn btn-primary" //onclick="showPage('analytics')"
          >
            Xem báo cáo chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}
