import { AppraiserHeader } from "../components/AppraiserHeader";
import { AppraiserFooter } from "../components/AppraiserFooter";
import "../styles/AppraiserSettingPage.css";

export function AppraiserSettingPage() {
  return (
    <>
      <AppraiserHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Cài đặt tài khoản</h1>
          <form className="settings-form">
            <label>Tên hiển thị</label>
            <input type="text" defaultValue="Thẩm định viên A" />

            <label>Email</label>
            <input type="email" defaultValue="appraiser@example.com" />

            <label>Mật khẩu mới</label>
            <input type="password" placeholder="Nhập mật khẩu mới" />

            <button type="submit">Lưu thay đổi</button>
          </form>
        </div>
      </main>
      <AppraiserFooter />
    </>
  );
}
