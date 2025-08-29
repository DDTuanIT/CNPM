import "./UserManagement.css";

export function UserManagement() {
  return (
    <main className="main">
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="page-title">Quản lý người dùng</h1>
            <p className="page-subtitle">
              Danh sách người dùng và quyền hạn trên hệ thống
            </p>
          </div>
        </div>

        <div className="users-list">
          {/* User 1 */}
          <div className="user-card">
            <div className="user-info">
              <h3 className="user-name">Nguyễn Văn A</h3>
              <p>Email: nguyenvana@example.com</p>
              <p>Vai trò: Người bán</p>
              <p>Ngày tham gia: 12/01/2024</p>
            </div>
            <div className="user-actions">
              <button className="btn btn-outline btn-sm">👁️ Xem</button>
              <button className="btn btn-primary btn-sm">✏️ Sửa</button>
              <button className="btn btn-danger btn-sm">🗑️ Xóa</button>
            </div>
          </div>

          {/* User 2 */}
          <div className="user-card">
            <div className="user-info">
              <h3 className="user-name">Trần Thị B</h3>
              <p>Email: tranthib@example.com</p>
              <p>Vai trò: Người mua</p>
              <p>Ngày tham gia: 05/01/2024</p>
            </div>
            <div className="user-actions">
              <button className="btn btn-outline btn-sm">👁️ Xem</button>
              <button className="btn btn-primary btn-sm">✏️ Sửa</button>
              <button className="btn btn-danger btn-sm">🗑️ Xóa</button>
            </div>
          </div>

          {/* User 3 */}
          <div className="user-card">
            <div className="user-info">
              <h3 className="user-name">Phạm Văn C</h3>
              <p>Email: phamvanc@example.com</p>
              <p>Vai trò: Admin</p>
              <p>Ngày tham gia: 01/12/2023</p>
            </div>
            <div className="user-actions">
              <button className="btn btn-outline btn-sm">👁️ Xem</button>
              <button className="btn btn-primary btn-sm">✏️ Sửa</button>
              <button className="btn btn-danger btn-sm">🗑️ Xóa</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
