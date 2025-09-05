import { useEffect, useState } from "react";
import "./UserManagement.css";

export function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({});

  // fallback mock data
  const mockUsers = [
    {
      user_id: "1",
      user_name: "nguyenvana",
      full_name: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
      phone_number: "0901234567",
      role_name: "seller",
      address: "Hà Nội",
      user_password: "123456",
    },
    {
      user_id: "2",
      user_name: "tranthib",
      full_name: "Trần Thị B",
      email: "tranthib@example.com",
      phone_number: "0909876543",
      role_name: "buyer",
      address: "TP.HCM",
      user_password: "654321",
    },
  ];

  const fetchUsers = () => {
    setLoading(true);
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Dùng fallback mock data");
        setUsers(mockUsers); // fallback
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (user_id) => {
    if (!window.confirm("Bạn có chắc muốn xóa user này không?")) return;
    try {
      const res = await fetch(`/api/users/${user_id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("API lỗi, dùng mock");
      fetchUsers();
    } catch (err) {
      console.warn("Fallback delete:", err.message);
      setUsers((prev) => prev.filter((u) => u.user_id !== user_id));
    }
  };

  const startEdit = (user) => {
    setEditingUser(user.user_id);
    setFormData({ ...user, user_password: "" }); // mật khẩu trống để tránh leak
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    const payload = { ...formData };
    if (!payload.user_password) {
      delete payload.user_password; // giữ nguyên pass nếu không nhập
    }

    try {
      const res = await fetch(`/api/users/${editingUser}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("API lỗi, dùng mock");
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.warn("Fallback update:", err.message);
      setUsers((prev) =>
        prev.map((u) =>
          u.user_id === editingUser ? { ...u, ...payload } : u
        )
      );
      setEditingUser(null);
    }
  };

  if (loading) return <div className="loading">Đang tải dữ liệu...</div>;

  return (
    <main className="main">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Quản lý người dùng</h1>
          <p className="page-subtitle">
            Danh sách người dùng và quyền hạn trên hệ thống
          </p>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="users-list">
          {users.map((user) =>
            editingUser === user.user_id ? (
              <div className="user-card editing" key={user.user_id}>
                <h3>Chỉnh sửa người dùng</h3>
                <input
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Tên đăng nhập"
                />
                <input
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Họ tên"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Số điện thoại"
                />
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Địa chỉ"
                />
                <select
                  name="role_name"
                  value={formData.role_name}
                  onChange={handleChange}
                >
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="appraiser">Appraiser</option>
                  <option value="support">Support</option>
                  <option value="admin">Admin</option>
                </select>
                <input
                  type="password"
                  name="user_password"
                  value={formData.user_password}
                  onChange={handleChange}
                  placeholder="Mật khẩu mới (để trống nếu không đổi)"
                />
                <div className="user-actions">
                  <button className="btn btn-primary btn-sm" onClick={saveEdit}>
                    💾 Lưu
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => setEditingUser(null)}
                  >
                    ❌ Hủy
                  </button>
                </div>
              </div>
            ) : (
              <div className="user-card" key={user.user_id}>
                <div className="user-info">
                  <h3 className="user-name">{user.full_name}</h3>
                  <p>Email: {user.email}</p>
                  <p>Vai trò: {user.role_name}</p>
                  <p>Tài khoản: {user.user_name}</p>
                  <p>SĐT: {user.phone_number}</p>
                  <p>Địa chỉ: {user.address}</p>
                </div>
                <div className="user-actions">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => startEdit(user)}
                  >
                    ✏️ Sửa
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.user_id)}
                  >
                    🗑️ Xóa
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
