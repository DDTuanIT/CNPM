import { SupportHeader } from "../components/SupportHeader";
import { SupportSidebar } from "../components/SupportSidebar";
import "../styles/SupportSettingPage.css";

export function SupportSettingPage() {
  return (
    <>
      <SupportHeader />
      <div className="support-layout">
        <SupportSidebar />
        <main className="support-main">
          <h2>⚙ Settings</h2>
          <p>Quản lý cấu hình cá nhân và thông tin tài khoản.</p>
        </main>
      </div>
    </>
  );
}
