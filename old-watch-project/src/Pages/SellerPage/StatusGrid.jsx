import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
export function StatusGrid({ productDraffs, orders }) {
  const { user } = useContext(UserContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!user) nav("/LoginPage");
  });
  let quantity = 0;
  let turnover = 0;
  productDraffs.map((productDraff) => {
    if (productDraff.seller_id === user.user_id) {
      turnover += productDraff.price;
      quantity += 1;
    }
  });

  return (
    <div className="status-grid">
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
          <div className="stat-number">
            {orders.filter((order) => order.user_id === user.user_id).length}
          </div>
          <div className="stat-change neutral"></div>
        </div>
      </div>
    </div>
  );
}
