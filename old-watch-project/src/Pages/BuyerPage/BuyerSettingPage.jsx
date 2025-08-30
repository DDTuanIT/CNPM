import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerSettingPage() {
  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Cài đặt tài khoản</h1>
          <p className="page-subtitle">Quản lý thông tin cá nhân và bảo mật.</p>
          {/* TODO: form chỉnh sửa thông tin */}
        </div>
      </main>
      <Footer />
    </>
  );
}
