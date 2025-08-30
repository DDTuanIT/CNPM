import { useState } from "react";
import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerSettingPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <BuyerHeader />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Cài đặt Buyer</h1>
        </div>

        <div className="settings-container">
          <div className="settings-tabs">
            <button
              className={`settings-tab ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              👤 Hồ sơ cá nhân
            </button>
            <button
              className={`settings-tab ${activeTab === "notifications" ? "active" : ""}`}
              onClick={() => setActiveTab("notifications")}
            >
              🔔 Thông báo
            </button>
            <button
              className={`settings-tab ${activeTab === "payment" ? "active" : ""}`}
              onClick={() => setActiveTab("payment")}
            >
              💳 Thanh toán
            </button>
          </div>

          <div className="settings-content">
            {activeTab === "profile" && (
              <form className="settings-form">
                <label>Tên</label>
                <input type="text" placeholder="Tên của bạn" />

                <label>Email</label>
                <input type="email" placeholder="you@example.com" />

                <label>Số điện thoại</label>
                <input type="text" placeholder="0123456789" />

                <button className="btn btn-primary">Lưu thay đổi</button>
              </form>
            )}

            {activeTab === "notifications" && (
              <div className="settings-section">
                <label>
                  <input type="checkbox" /> Nhận email khuyến mãi
                </label>
                <label>
                  <input type="checkbox" /> Nhận thông báo đơn hàng
                </label>
                <button className="btn btn-primary">Lưu thay đổi</button>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="settings-section">
                <label>Phương thức mặc định</label>
                <select>
                  <option>Ví Escrow</option>
                  <option>Thẻ tín dụng</option>
                  <option>Chuyển khoản</option>
                </select>
                <button className="btn btn-primary">Lưu thay đổi</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
