import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";
import "./BuyerOrdersPage.css";

export function BuyerOrdersPage() {
  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Đơn hàng của bạn</h1>
            <p className="page-subtitle">Theo dõi và quản lý các đơn hàng</p>
          </div>

          <div className="orders-list">
            {/* Ví dụ đơn hàng 1 */}
            <div className="order-card">
              <div className="order-image">
                <img
                  src="https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=60&h=60&fit=crop"
                  alt="Rolex"
                />
              </div>
              <div className="order-info">
                <h3 className="order-id">Đơn hàng #B001</h3>
                <p className="order-product">Rolex Submariner 1965</p>
                <p className="order-date">15/08/2025 - 14:30</p>
              </div>
              <div className="order-price">
                <div className="price">85,000,000 VNĐ</div>
                <span className="badge badge-warning">⏰ Chờ xử lý</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-outline btn-sm">👁️ Xem chi tiết</button>
                <button className="btn btn-primary btn-sm">❌ Hủy</button>
              </div>
            </div>

            {/* Ví dụ đơn hàng 2 */}
            <div className="order-card">
              <div className="order-image">
                <img
                  src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=60&h=60&fit=crop"
                  alt="Omega"
                />
              </div>
              <div className="order-info">
                <h3 className="order-id">Đơn hàng #B002</h3>
                <p className="order-product">Omega Speedmaster</p>
                <p className="order-date">14/08/2025 - 09:15</p>
              </div>
              <div className="order-price">
                <div className="price">45,000,000 VNĐ</div>
                <span className="badge badge-info">🚚 Đang giao</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-outline btn-sm">👁️ Xem chi tiết</button>
                <button className="btn btn-outline btn-sm">💬 Liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
