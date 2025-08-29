import "./Security.css";

export function Security() {
  return (
    <main className="security-main">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="page-title">Cảnh báo bảo mật</h1>
            <p className="page-subtitle">
              Theo dõi và xử lý các sự kiện an ninh hệ thống
            </p>
          </div>
        </div>

        <div className="security-list">
          {/* Alert 1 */}
          <div className="security-card high">
            <div className="security-info">
              <h3 className="security-title">Đăng nhập bất thường từ IP lạ</h3>
              <div className="badges">
                <span className="badge badge-danger">Cao</span>
                <span className="badge badge-warning">Đang điều tra</span>
              </div>
              <p>Người dùng: user123@email.com</p>
              <p>Loại: suspicious_login</p>
              <p>16:30 20/01/2024</p>
            </div>
            <div className="security-actions">
              <button className="btn btn-outline btn-sm">👁️ Chi tiết</button>
              <button className="btn btn-danger btn-sm">🔒 Khóa ngay</button>
            </div>
          </div>

          {/* Alert 2 */}
          <div className="security-card medium">
            <div className="security-info">
              <h3 className="security-title">
                Nhiều lần thanh toán thất bại liên tiếp
              </h3>
              <div className="badges">
                <span className="badge badge-warning">Trung bình</span>
                <span className="badge badge-success">Đã xử lý</span>
              </div>
              <p>Người dùng: buyer456@email.com</p>
              <p>Loại: failed_payments</p>
              <p>14:15 20/01/2024</p>
            </div>
            <div className="security-actions">
              <button className="btn btn-outline btn-sm">👁️ Chi tiết</button>
            </div>
          </div>

          {/* Alert 3 */}
          <div className="security-card critical">
            <div className="security-info">
              <h3 className="security-title">
                Phát hiện cố gắng truy cập trái phép dữ liệu
              </h3>
              <div className="badges">
                <span className="badge badge-danger">Nghiêm trọng</span>
                <span className="badge badge-danger">Đã chặn</span>
              </div>
              <p>Người dùng: unknown</p>
              <p>Loại: data_breach_attempt</p>
              <p>13:45 20/01/2024</p>
            </div>
            <div className="security-actions">
              <button className="btn btn-outline btn-sm">👁️ Chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
