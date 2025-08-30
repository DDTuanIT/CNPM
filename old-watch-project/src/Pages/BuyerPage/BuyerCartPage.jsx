import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerCartPage() {
  return (
    <>
      <BuyerHeader />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Giỏ hàng</h1>
        </div>

        <div className="cart-list">
          <div className="cart-item">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=80&h=80&fit=crop"
              alt="Rolex"
            />
            <div className="cart-info">
              <h3>Rolex Submariner</h3>
              <p>85,000,000 VNĐ</p>
            </div>
            <div className="cart-actions">
              <button className="btn btn-outline btn-sm">-</button>
              <span>1</span>
              <button className="btn btn-outline btn-sm">+</button>
              <button className="btn btn-ghost btn-sm">❌</button>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <p>Tạm tính: 85,000,000 VNĐ</p>
          <p>Thuế + phí: 2,000,000 VNĐ</p>
          <h3>Tổng: 87,000,000 VNĐ</h3>
          <button className="btn btn-primary">Thanh toán</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
