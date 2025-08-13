import { Link } from "react-router-dom";
import "./AddProductPage.css";
export function AddProductPage() {
  return (
    <>
      <div id="add-product-page">
        <div className="container">
          <div className="page-header">
            <div>
              <Link to="/SellerDashBoard">
                <button
                  className="btn btn-outline back-button" //onclick="showPage('dashboard')"
                >
                  ← Quay lại Dashboard
                </button>
              </Link>

              <h1 className="page-title">Thêm sản phẩm mới</h1>
              <p className="page-subtitle">
                Đăng sản phẩm đồng hồ vintage của bạn
              </p>
            </div>
          </div>

          <form className="product-form">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Thông tin cơ bản</h3>
              </div>
              <div className="card-content">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Tên sản phẩm *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Thương hiệu *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Giá bán (VNĐ) *</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="0"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Xuất xứ *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Xuất xứ *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Loại đồng hồ *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tình trạng *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Hình ảnh sản phẩm</h3>
              </div>
              <div className="card-content">
                <div className="upload-area">
                  <div className="upload-zone">
                    <div className="upload-icon">📷</div>
                    <h4>Kéo thả hoặc click để tải ảnh</h4>
                    <p>Tối đa 10 ảnh, mỗi ảnh không quá 5MB</p>
                    <input
                      type="file"
                      className="upload-input"
                      multiple
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="image-preview"></div>
              </div>
            </div>

            <div className="form-actions form-bottom">
              <button
                type="button"
                className="btn btn-outline"
                //onclick="showPage('dashboard')"
              >
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                🔄 Lưu nháp
              </button>
              <button type="submit" className="btn btn-success ">
                📝 Đăng sản phẩm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
