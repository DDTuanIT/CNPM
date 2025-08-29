import "./SystemSettings.css";

export function SystemSettings() {
  return (
    <div id="system-settings-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Hệ thống</h1>
          <p className="page-subtitle">
            Giám sát trạng thái và quản lý hệ thống
          </p>
        </div>

        <div className="system-grid">
          {/* Trạng thái hệ thống */}
          <div className="system-card">
            <h2 className="card-title">Trạng thái hệ thống</h2>
            <ul className="status-list">
              <li>
                <span className="icon">🖥️</span> Server API
                <span className="badge badge-success">Hoạt động</span>
              </li>
              <li>
                <span className="icon">💾</span> Cơ sở dữ liệu
                <span className="badge badge-success">Hoạt động</span>
              </li>
              <li>
                <span className="icon">🌐</span> CDN
                <span className="badge badge-success">Hoạt động</span>
              </li>
              <li>
                <span className="icon">💳</span> Payment Gateway
                <span className="badge badge-warning">Chậm</span>
              </li>
            </ul>
          </div>

          {/* Cập nhật hệ thống */}
          <div className="system-card">
            <h2 className="card-title">Cập nhật hệ thống</h2>
            <button className="btn btn-primary full">
              🔄 Cập nhật phần mềm
            </button>
            <div className="actions-list">
              <button className="btn btn-outline full">⚙️ Quản lý cấu hình</button>
              <button className="btn btn-outline full">📄 Xem log hệ thống</button>
              <button className="btn btn-outline full">📊 Báo cáo hiệu suất</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
