import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
export function StatusGrid({ productDraffs, orders }) {
  const { user } = useContext(UserContext);
  let quantity = 0;
  let turnover = 0;
  productDraffs.map((productDraff) => {
    if (productDraff.seller_id === user.user_id) {
      turnover += productDraff.price;
      quantity += 1;
    }
  });

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Tổng sản phẩm</span>
          <span className="stat-icon">📦</span>
        </div>
        <div className="stat-content">
          <div className="stat-number">{quantity}</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Doanh thu dự kiến</span>
          <span className="stat-icon">💰</span>
        </div>
        <div className="stat-content">
          <div className="stat-number">
            {turnover.toLocaleString("vi-VN")} VNĐ
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Đơn hàng</span>
          <span className="stat-icon">🛒</span>
        </div>
        <div className="stat-content">
          <div className="stat-number">{orders.length}</div>
          <div className="stat-change neutral"></div>
        </div>
      </div>
    </div>
  );
}
