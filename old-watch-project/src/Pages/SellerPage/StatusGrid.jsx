export function StatusGrid({ productDraffs }) {
  const quantity = productDraffs.length;
  let turnover = 0;
  productDraffs.map((productDraff) => {
    turnover += productDraff.price;
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
          <div className="stat-number">8</div>
          <div className="stat-change neutral">3 chờ xử lý</div>
        </div>
      </div>
    </div>
  );
}
