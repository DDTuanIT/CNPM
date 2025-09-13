export function BuyerStatusGrid() {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Tổng đơn hàng</span>
          <span className="stat-icon">📦</span>
        </div>
        <div className="stat-content">
          <div className="stat-number">12</div>
          <div className="stat-change positive">+3 so với tháng trước</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Tổng chi tiêu</span>
          <span className="stat-icon">💰</span>
        </div>
        <div className="stat-content">
          <div className="stat-number">85M</div>
          <div className="stat-change positive">+10% so với tháng trước</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Đơn đang giao</span>
          <span className="stat-icon">🛒</span>
        </div>
        <div className="stat-content">
          <div className="stat-number">2</div>
          <div className="stat-change neutral">1 chờ xác nhận</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <span className="stat-title">Wishlist</span>
          <span className="stat-icon">⭐</span>
        </div>
        <div className="stat-content">
          <div className="stat-number">6</div>
          <div className="stat-change neutral">2 sản phẩm mới</div>
        </div>
      </div>
    </div>
  );
}
