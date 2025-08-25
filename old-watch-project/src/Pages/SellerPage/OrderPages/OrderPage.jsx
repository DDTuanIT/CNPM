import { Header } from "../Header";
import { Footer } from "../../Footer/Footer";
export function OrderPage() {
  return (
    <>
      <Header />
      <div id="orders-page">
        <div className="container">
          <div className="page-header">
            <div>
              <h1 className="page-title">Đơn hàng</h1>
              <p className="page-subtitle">
                Quản lý đơn hàng của bạn 
              </p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">28</div>
                <div className="stat-title">Tổng đơn hàng</div>
              </div>
            </div>
            <div className="stat-card orange">
              <div className="stat-content">
                <div className="stat-number">5</div>
                <div className="stat-title">Chờ xử lý</div>
              </div>
            </div>
            <div className="stat-card blue">
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-title">Đang giao</div>
              </div>
            </div>
            <div className="stat-card green">
              <div className="stat-content">
                <div className="stat-number">20</div>
                <div className="stat-title">Hoàn thành</div>
              </div>
            </div>
          </div>

          <div className="orders-list">
            <div className="order-card">
              <div className="order-image">
                <img
                  src="https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=60&h=60&fit=crop"
                  alt="Rolex"
                />
              </div>
              <div className="order-info">
                <h3 className="order-id">Đơn hàng #VT001234</h3>
                <p className="order-product">Rolex Submariner 1965</p>
                <p className="order-customer">Khách hàng: Nguyễn Văn A</p>
                <p className="order-date">15/01/2024 - 14:30</p>
              </div>
              <div className="order-price">
                <div className="price">85,000,000 VNĐ</div>
                <span className="badge badge-warning">⏰ Chờ xử lý</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-outline btn-sm">👁️ Chi tiết</button>
                <button className="btn btn-primary btn-sm">✅ Xác nhận</button>
              </div>
            </div>

            <div className="order-card">
              <div className="order-image">
                <img
                  src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=60&h=60&fit=crop"
                  alt="Omega"
                />
              </div>
              <div className="order-info">
                <h3 className="order-id">Đơn hàng #VT001235</h3>
                <p className="order-product">Omega Speedmaster Professional</p>
                <p className="order-customer">Khách hàng: Trần Thị B</p>
                <p className="order-date">14/01/2024 - 09:15</p>
              </div>
              <div className="order-price">
                <div className="price">45,000,000 VNĐ</div>
                <span className="badge badge-info">🚚 Đang giao</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-outline btn-sm">👁️ Chi tiết</button>
                <button className="btn btn-outline btn-sm">💬 Liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
