
import { Footer } from "../Footer/Footer";
import { Header } from "./Header";
export function ProductManagePage() {
  return (
    <>
			<Header />
      <div id="product-management-page">
        <div className="container">
          <div className="page-header">
            <div>
  

              <h1 className="page-title">Quản lý sản phẩm</h1>
              <p className="page-subtitle">
                Quản lý và chỉnh sửa sản phẩm của bạn
              </p>
            </div>
            <div className="page-actions">
            
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="filter-tabs">
                <button className="filter-btn ">Tất cả (24)</button>
                <button className="filter-btn active">Đang bán (18)</button>
                <button className="filter-btn">Chờ duyệt (3)</button>
                <button className="filter-btn">Đã bán (15)</button>
                <button className="filter-btn">Nháp (2)</button>
                <button className="filter-btn">Đã ẩn (1)</button>
              </div>
            </div>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=300&h=200&fit=crop"
                  alt="Rolex Submariner"
                  className="product-image"
                />
                <div className="product-status status-active">Đang bán</div>
                <div className="product-actions">
                  <button className="action-btn" title="Chỉnh sửa">
                    ✏️
                  </button>
                  <button className="action-btn" title="Ẩn">
                    👁️
                  </button>
                  <button className="action-btn" title="Xóa">
                    🗑️
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Rolex Submariner 1965</h3>
                <p className="product-brand">Rolex</p>
                <div className="product-price">85,000,000 VNĐ</div>
                <div className="product-stats">
                  <span className="stat-item">👁️ 245 lượt xem</span>
                  <span className="stat-item">❤️ 12 yêu thích</span>
                </div>
                <div className="product-date">Đăng 2 ngày trước</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop"
                  alt="Omega Speedmaster"
                  className="product-image"
                />
                <div className="product-status status-pending">Chờ duyệt</div>
                <div className="product-actions">
                  <button className="action-btn" title="Chỉnh sửa">
                    ✏️
                  </button>
                  <button className="action-btn" title="Ẩn">
                    👁️
                  </button>
                  <button className="action-btn" title="Xóa">
                    🗑️
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">
                  Omega Speedmaster Professional
                </h3>
                <p className="product-brand">Omega</p>
                <div className="product-price">45,000,000 VNĐ</div>
                <div className="product-stats">
                  <span className="stat-item">👁️ 89 lượt xem</span>
                  <span className="stat-item">❤️ 7 yêu thích</span>
                </div>
                <div className="product-date">Đăng 1 tuần trước</div>
              </div>
            </div>

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
                <div className="product-stats">
                  <span className="stat-item">👁️ 456 lượt xem</span>
                  <span className="stat-item">❤️ 24 yêu thích</span>
                </div>
                <div className="product-date">Bán 3 ngày trước</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300&h=200&fit=crop"
                  alt="TAG Heuer"
                  className="product-image"
                />
                <div className="product-status status-draft">Nháp</div>
                <div className="product-actions">
                  <button className="action-btn" title="Chỉnh sửa">
                    ✏️
                  </button>
                  <button className="action-btn" title="Đăng">
                    📝
                  </button>
                  <button className="action-btn" title="Xóa">
                    🗑️
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">TAG Heuer Monaco</h3>
                <p className="product-brand">TAG Heuer</p>
                <div className="product-price">25,000,000 VNĐ</div>
                <div className="product-stats">
                  <span className="stat-item">👁️ 0 lượt xem</span>
                  <span className="stat-item">❤️ 0 yêu thích</span>
                </div>
                <div className="product-date">Tạo 5 ngày trước</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1594576962017-62b8b8b96aa0?w=300&h=200&fit=crop"
                  alt="Cartier"
                  className="product-image"
                />
                <div className="product-status status-active">Đang bán</div>
                <div className="product-actions">
                  <button className="action-btn" title="Chỉnh sửa">
                    ✏️
                  </button>
                  <button className="action-btn" title="Ẩn">
                    👁️
                  </button>
                  <button className="action-btn" title="Xóa">
                    🗑️
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Cartier Santos</h3>
                <p className="product-brand">Cartier</p>
                <div className="product-price">65,000,000 VNĐ</div>
                <div className="product-stats">
                  <span className="stat-item">👁️ 178 lượt xem</span>
                  <span className="stat-item">❤️ 9 yêu thích</span>
                </div>
                <div className="product-date">Đăng 1 ngày trước</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1509941943102-10c232535736?w=300&h=200&fit=crop"
                  alt="Audemars Piguet"
                  className="product-image"
                />
                <div className="product-status status-hidden">Đã ẩn</div>
                <div className="product-actions">
                  <button className="action-btn" title="Hiển thị">
                    👁️
                  </button>
                  <button className="action-btn" title="Chỉnh sửa">
                    ✏️
                  </button>
                  <button className="action-btn" title="Xóa">
                    🗑️
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">Audemars Piguet Royal Oak</h3>
                <p className="product-brand">Audemars Piguet</p>
                <div className="product-price">320,000,000 VNĐ</div>
                <div className="product-stats">
                  <span className="stat-item">👁️ 567 lượt xem</span>
                  <span className="stat-item">❤️ 31 yêu thích</span>
                </div>
                <div className="product-date">Ẩn 2 tuần trước</div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
			<Footer />
    </>
  );
}
