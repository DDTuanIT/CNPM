import { Link } from "react-router-dom";
import "../styles/BuyerTabContainer.css";

export function BuyerTabContainer() {
  return (
    <div className="tab-container">
      <div className="tab-nav">
        <Link to="/BuyerOrders" className="tab-btn">
          <button>🛒 Đơn hàng</button>
        </Link>

        <Link to="/BuyerWishlist" className="tab-btn">
          <button>❤️ Wishlist</button>
        </Link>

        <Link to="/BuyerProducts" className="tab-btn">
          <button>📦 Sản phẩm đã mua</button>
        </Link>

        <Link to="/BuyerCart" className="tab-btn">
          <button>🛍️ Giỏ hàng</button>
        </Link>

        <Link to="/BuyerCheckout" className="tab-btn">
          <button>💳 Thanh toán</button>
        </Link>

        <Link to="/BuyerSetting" className="tab-btn">
          <button>⚙️ Cài đặt</button>
        </Link>
      </div>

      {/* Phần content rỗng, để route handle hiển thị */}
      <div className="tab-content">
        <p>Chọn 1 tab để hiển thị nội dung...</p>
      </div>
    </div>
  );
}
