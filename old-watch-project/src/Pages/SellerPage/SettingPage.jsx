import { Header } from "./Header";
import { Footer } from "../Footer/Footer";
import { UserContext } from "../Context/UserContext";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function SettingPage() {
  const { user, setUser } = useContext(UserContext);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const handleSubmitButton = async () => {
    const fullNameData = fullNameRef.current.value;
    const emailData = emailRef.current.value;
    const addressData = addressRef.current.value;
    const phoneNumberData = phoneNumberRef.current.value;

    const updateUser = {
      user_id: user.user_id,
      user_name: user.user_name,
      full_name: fullNameData,
      address: addressData,
      email: emailData,
      phone_number: phoneNumberData,
      role_name: user.role_name,
    };
    setUser(updateUser);
    console.log(updateUser);
    try {
      const response = await axios.put(
        "http://localhost:6868/api/Login",
        updateUser,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("Sửa thông tin thành công");
      response;
    } catch (err) {
      alert(`ERROR: ${err}`);
    }
  };
  return (
    <>
      <Header />
      <div id="settings-page">
        <div className="container">
          <div className="page-header">
            <div>
              <Link to="/SellerDashBoard">
                <button className="btn btns-outline back-button">
                  ← Quay lại Dashboard
                </button>
              </Link>
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
                        defaultValue={
                          !user.full_name
                            ? "Vui lòng điền thông tin"
                            : user.full_name
                        }
                        ref={fullNameRef}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-input"
                        defaultValue={
                          !user.email ? "Vui lòng điền thông tin" : user.email
                        }
                        ref={emailRef}
                      />
                    </div>
                    <div className="form-group">
                      <label>Địa chỉ</label>
                      <input
                        type="text"
                        className="form-input"
                        defaultValue={
                          !user.address
                            ? "Vui lòng điền thông tin"
                            : user.address
                        }
                        ref={addressRef}
                      />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại</label>
                      <input
                        type="tel"
                        className="form-input"
                        defaultValue={
                          !user.phone_number
                            ? "Vui lòng điền thông tin"
                            : user.phone_number
                        }
                        ref={phoneNumberRef}
                      />
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={handleSubmitButton}
                    >
                      💾 Lưu thay đổi
                    </button>
                    <Link to="/LoginPage">
                      <button className="btn btn-primary">Đăng xuất</button>
                    </Link>
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
