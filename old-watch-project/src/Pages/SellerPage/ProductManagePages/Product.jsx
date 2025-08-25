export function Product() {
  return (
    <>
      <div className="product-card">
        <div className="product-image-container">
          <img
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=300&h=200&fit=crop"
            alt="Patek Philippe"
            className="product-image"
          />
          <div className="product-status status-sold">Đã bán</div>
          <div className="product-actions">
            <button className="action-btn" title="Xem chi tiết">
              👁️
            </button>
            <button className="action-btn" title="Đăng lại">
              🔄
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-title">Patek Philippe Calatrava</h3>
          <p className="product-brand">Patek Philippe</p>
          <div className="product-price">180,000,000 VNĐ</div>
          <div className="product-date">Bán 3 ngày trước</div>
        </div>
      </div>
    </>
  );
}
