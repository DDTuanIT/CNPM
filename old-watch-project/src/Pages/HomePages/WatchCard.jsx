



export function WatchCard() {

	function handleSeeDetails() {
		
		alert("Vui lòng đăng nhập để xem chi tiết sản phẩm");
	}
    return (
      <div className="watch-card">
        <div className="watch-image">
          <img src="logo-web.png" alt="" />
          <div className="watch-badge">
            <svg
              className="icon-sm"
              style={{ marginRight: 0.25 + "rem" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Đã thẩm định
          </div>
        </div>
        <div className="watch-content">
          <div className="watch-header">
            <div>
              <h3 className="watch-title">Patek Philippe Calatrava</h3>
              <p className="watch-subtitle">Patek Philippe • 1965</p>
            </div>
            <div className="watch-price">$25,000</div>
          </div>
          <div className="watch-details">
            <div className="watch-detail">
              <span style={{ color: "var(--muted-foreground)" }}>
                Tình trạng:
              </span>
              <span className="badge">Mint</span>
            </div>
            <div className="watch-detail">
              <span style={{ color: "var(--muted-foreground)" }}>
                Người bán:
              </span>
              <span>LuxuryWatches_Pro</span>
            </div>
            <div className="watch-location">
              <svg
                className="icon-sm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Geneva
            </div>
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "100%", marginTop: 1 + "rem" }}
						onClick={handleSeeDetails}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
}