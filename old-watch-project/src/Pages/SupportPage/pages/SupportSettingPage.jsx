import { SupportHeader } from "../components/SupportHeader";
import { SupportFooter } from "../components/SupportFooter";
import "../styles/SupportSettingPage.css";

export function SupportSettingPage() {
  return (
    <div className="support-layout">
      <SupportHeader />
      <div className="main-container">
        <main className="settings-main">
          <h1>Cài đặt tài khoản</h1>
          <form className="settings-form">
            <label>Tên hiển thị</label>
            <input type="text" defaultValue="Nguyễn CSKH" />
            <label>Email</label>
            <input type="email" defaultValue="support@example.com" />
            <label>Mật khẩu mới</label>
            <input type="password" placeholder="Nhập mật khẩu mới" />
            <button type="submit" className="btn-primary">Lưu thay đổi</button>
          </form>
        </main>
      </div>
      <SupportFooter />
    </div>
  );
}
