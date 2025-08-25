import { Link } from "react-router-dom";
import { useRef } from "react";
import "./AddProductPage.css";

export function AddProductPage() {
  const nameRef = useRef(null);
  const brandRef = useRef(null);
  const priceRef = useRef(null);
  const originRef = useRef(null);
  const modelRef = useRef(null);
  const statusRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmitButton = () => {
    
  };

  return (
    <>
      <div id="add-product-page">
        <div className="container">
          <div className="page-header">
            <div>
              <Link to="/SellerDashBoard">
                <button className="btn btn-outline back-button">
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
                <div className="form-group">
                  <label className="form-label">Tên sản phẩm </label>
                  <input
                    ref={nameRef}
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Thương hiệu </label>
                  <input
                    ref={brandRef}
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Giá bán (VNĐ) </label>
                  <input
                    ref={priceRef}
                    type="number"
                    className="form-input"
                    placeholder="VNĐ"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Xuất xứ </label>
                  <input
                    ref={originRef}
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Loại đồng hồ </label>
                  <input
                    ref={modelRef}
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tình trạng </label>
                  <input
                    ref={statusRef}
                    type="text"
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>

          
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Mô tả sản phẩm</h3>
              </div>
              <div className="card-content">
                <div className="upload-area">
                  <div className="drop-area">
                    <textarea
                      ref={descriptionRef}
                      id="description"
                      placeholder="Nhập mô tả ở đây..."
                    ></textarea>
                  </div>
                </div>
                <div className="image-preview"></div>
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
              <Link to="/SellerDashBoard" className="btn btn-outline">
                <button type="button">Hủy</button>
              </Link>

              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmitButton}
              >
                📝 Đăng sản phẩm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
