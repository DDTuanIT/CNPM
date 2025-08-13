
import './PageHeader.css'

export function PageHeader() {
    return (
      <>
        <div className="page-header">
          <div>
            <h1 className="page-title">Dashboard Người Bán</h1>
            <p className="page-subtitle">
              Quản lý cửa hàng và sản phẩm của bạn
            </p>
          </div>
          <div className="page-actions">
            <button className="btn btn-outline">📋 Thông báo</button>
            <button
              className="btn btn-primary"
              onclick="showPage('add-product')"
            >
              ➕ Thêm sản phẩm
            </button>
          </div>
        </div>
      </>
    );
}