import { Header } from "./Header";
import { PageHeader } from "./PageHeader";
import './SellerDashBoard.css'
export function SellerDashBoard() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
					<PageHeader />

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Tổng sản phẩm</span>
                <span className="stat-icon">📦</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">24</div>
                <div className="stat-change positive">+2 từ tháng trước</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Doanh thu</span>
                <span className="stat-icon">💰</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">125M</div>
                <div className="stat-change positive">+15% từ tháng trước</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Đơn hàng</span>
                <span className="stat-icon">🛒</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">8</div>
                <div className="stat-change neutral">3 chờ xử lý</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Đánh giá</span>
                <span className="stat-icon">⭐</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">4.8</div>
                <div className="stat-change neutral">36 đánh giá</div>
              </div>
            </div>
          </div>

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
                      <button
                        className="quick-action-btn"
                        onclick="showPage('add-product')"
                      >
                        <span className="action-icon">➕</span>
                        <span className="action-text">Thêm sản phẩm</span>
                      </button>
                      <button
                        className="quick-action-btn"
                        onclick="showPage('product-management')"
                      >
                        <span className="action-icon">✏️</span>
                        <span className="action-text">Quản lý sản phẩm</span>
                      </button>
                      <button
                        className="quick-action-btn"
                        onclick="showPage('messages')"
                      >
                        <span className="action-icon">💬</span>
                        <span className="action-text">Tin nhắn</span>
                      </button>
                      <button
                        className="quick-action-btn"
                        onclick="showPage('settings')"
                      >
                        <span className="action-icon">⚙️</span>
                        <span className="action-text">Cài đặt</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Hoạt động gần đây</h3>
                  </div>
                  <div className="card-content">
                    <div className="activity-list">
                      <div className="activity-item">
                        <div className="activity-dot green"></div>
                        <div className="activity-content">
                          <p className="activity-text">
                            Sản phẩm "Rolex GMT Master" đã được bán
                          </p>
                          <span className="activity-time">2 giờ trước</span>
                        </div>
                      </div>
                      <div className="activity-item">
                        <div className="activity-dot blue"></div>
                        <div className="activity-content">
                          <p className="activity-text">
                            Có tin nhắn mới từ khách hàng
                          </p>
                          <span className="activity-time">4 giờ trước</span>
                        </div>
                      </div>
                      <div className="activity-item">
                        <div className="activity-dot orange"></div>
                        <div className="activity-content">
                          <p className="activity-text">
                            Sản phẩm "Omega Speedmaster" cần thẩm định
                          </p>
                          <span className="activity-time">1 ngày trước</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Sản phẩm bán chạy</h3>
                  </div>
                  <div className="card-content">
                    <div className="product-list">
                      <div className="product-item">
                        <img
                          src="https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=50&h=50&fit=crop"
                          alt="watch"
                          className="product-image"
                        />
                        <div className="product-info">
                          <div className="product-name">
                            Rolex Submariner 1965
                          </div>
                          <div className="product-price">85,000,000 VNĐ</div>
                        </div>
                        <span className="badge badge-success">Bán chạy</span>
                      </div>
                      <div className="product-item">
                        <img
                          src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=50&h=50&fit=crop"
                          alt="watch"
                          className="product-image"
                        />
                        <div className="product-info">
                          <div className="product-name">Omega Speedmaster</div>
                          <div className="product-price">45,000,000 VNĐ</div>
                        </div>
                        <span className="badge badge-outline">Quan tâm</span>
                      </div>
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
                  onclick="showPage('product-management')"
                >
                  Đi đến trang quản lý sản phẩm
                </button>
              </div>
            </div>

            <div className="tab-content" id="orders">
              <div className="empty-state">
                <div className="empty-icon">🛒</div>
                <h3 className="empty-title">Đơn hàng của bạn</h3>
                <p className="empty-description">
                  Theo dõi và xử lý các đơn hàng
                </p>
                <button
                  className="btn btn-primary"
                  onclick="showPage('orders')"
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
                  className="btn btn-primary"
                  onclick="showPage('analytics')"
                >
                  Xem báo cáo chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
