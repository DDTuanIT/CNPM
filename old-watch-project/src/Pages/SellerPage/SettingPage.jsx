import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "../Footer/Footer";
export function SettingPage() {
  return (
    <>
			<Header />
      <div id="settings-page">
        <div className="container">
          <div className="page-header">
            <div>
              <h1 className="page-title">Cài đặt tài khoản</h1>
              <p className="page-subtitle">
                Quản lý thông tin và tùy chọn tài khoản của bạn
              </p>
            </div>
          </div>

          <div className="settings-tabs">
            <div className="settings-nav">
              <button
                className="settings-tab-btn active"
                data-settings-tab="profile"
              >
                👤 Hồ sơ
              </button>
              <button className="settings-tab-btn" data-settings-tab="store">
                🏪 Cửa hàng
              </button>
              <button
                className="settings-tab-btn"
                data-settings-tab="notifications"
              >
                🔔 Thông báo
              </button>
              <button className="settings-tab-btn" data-settings-tab="payment">
                💳 Thanh toán
              </button>
            </div>

            <div className="settings-content">
              <div
                className="settings-tab-content active"
                id="profile-settings"
              >
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Thông tin cá nhân</h3>
                  </div>
                  <div className="card-content">
                    <div className="form-group">
                      <label>Họ và tên</label>
                      <input
                        type="text"
                        className="form-input"
                        value="Nguyễn Văn An"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-input"
                        value="nguyen.van.an@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại</label>
                      <input
                        type="tel"
                        className="form-input"
                        value="0901234567"
                      />
                    </div>
                    <button className="btn btn-primary">💾 Lưu thay đổi</button>
                  </div>
                </div>
              </div>

              <div className="settings-tab-content" id="store-settings">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Thông tin cửa hàng</h3>
                  </div>
                  <div className="card-content">
                    <div className="form-group">
                      <label>Tên cửa hàng</label>
                      <input
                        type="text"
                        className="form-input"
                        value="Vintage Watch Store"
                      />
                    </div>
                    <div className="form-group">
                      <label>Mô tả cửa hàng</label>
                      <textarea className="form-textarea">
                        Chuyên cung cấp đồng hồ cổ điển chính hãng...
                      </textarea>
                    </div>
                    <button className="btn btn-primary">
                      🔄 Cập nhật cửa hàng
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="settings-tab-content"
                id="notifications-settings"
              />
            </div>

            <div className="settings-tab-content" id="payment-settings">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Thông tin thanh toán</h3>
                </div>
                <div className="card-content">
                  <div className="form-group">
                    <label>Tên ngân hàng</label>
                    <select className="form-select">
                      <option>Vietcombank</option>
                      <option>Techcombank</option>
                      <option>BIDV</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Số tài khoản</label>
                    <input
                      type="text"
                      className="form-input"
                      value="1234567890"
                    />
                  </div>
                  <div className="form-group">
                    <label>Tên chủ tài khoản</label>
                    <input
                      type="text"
                      className="form-input"
                      value="NGUYEN VAN AN"
                    />
                  </div>
                  <button className="btn btn-primary">
                    💾 Cập nhật thông tin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
			<Footer />
    </>
  );
}
