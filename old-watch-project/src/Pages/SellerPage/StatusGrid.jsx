

export function StatusGrid() {
    return (
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
    );
}