import { Header } from "./Header";
import { Footer } from "../Footer/Footer";
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppraiserForm } from "./AppraiserForm/AppraisaerForm";
import { SupportForm } from "./SupportForm/SupportForm";

export function SettingPage() {
  const { user, setUser } = useContext(UserContext);
  const nav = useNavigate();
  useEffect(() => {
    if (!user) nav("/LoginPage");
  });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const newPasswordRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showcard, setShowCard] = useState(false);
  const [showSupportForm, setSupportForm] = useState(false);
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
  const handleChangePassword = async () => {
    setShowModal(false);
    const newPasswordData = newPasswordRef.current.value;
    const emailData = emailRef.current.value;
    try {
      const response = await axios.post(
        "http://localhost:6868/api/changepassword",
        {
          email: emailData,
          new_password: newPasswordData,
        }
      );
      response;
      alert("Đổi mật khẩu thành công");
    } catch (e) {
      alert(`ERROR ${e}`);
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
                <button className="btns btns-outline back-button">
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
                          !user?.full_name
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
                          !user?.email ? "Vui lòng điền thông tin" : user.email
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
                          !user?.address
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
                          !user?.phone_number
                            ? "Vui lòng điền thông tin"
                            : user.phone_number
                        }
                        ref={phoneNumberRef}
                      />
                    </div>
                    <div className="form-group">
                      <label>Số dư</label>
                      <input
                        type="text"
                        className="form-input"
                        value={
                          !user?.balance
                            ? "0"
                            : `${user.balance.toLocaleString("vi-VN")} VNĐ`
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Số dư tạm giữ</label>
                      <input
                        type="text"
                        className="form-input"
                        value={
                          !user?.hold_balance
                            ? "0"
                            : `${user.hold_balance.toLocaleString("vi-VN")} VNĐ`
                        }
                      />
                    </div>
                  </div>
                  {
                    <div>
                      {showModal && (
                        <div>
                          {showModal && (
                            <div className="modal-overlays">
                              <div className="modal-box">
                                <h2 className="modal-title"></h2>
                                <div className="form-group">
                                  <label>Nhập mật khẩu mới</label>
                                  <input
                                    type="password"
                                    className="form-input"
                                    placeholder="Nhập mật khẩu mới"
                                    ref={newPasswordRef}
                                  />
                                </div>
                                <div className="modal-actions">
                                  <button
                                    className="btn-cancel"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Hủy
                                  </button>
                                  <button
                                    className="btn-confirm"
                                    onClick={handleChangePassword}
                                  >
                                    Xác nhận
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  }
                  <button
                    className="btns btns-outline save-button"
                    onClick={() => setSupportForm(true)}
                  >
                    Yêu cầu hỗ trợ
                  </button>
                  <button
                    className="btns btns-outline"
                    onClick={() => setShowCard(true)}
                  >
                    Đăng ký trở thành thẩm định viên
                  </button>
                  <button
                    className="btns btns-outline "
                    onClick={() => setShowModal(true)}
                  >
                    Đổi mật khẩu
                  </button>
                  <button
                    className="btns btns-outline"
                    onClick={handleSubmitButton}
                  >
                    💾 Lưu thay đổi
                  </button>
                  <Link to="/LoginPage">
                    <button
                      className="btns btns-outline"
                      onClick={() => setUser(null)}
                    >
                      Đăng xuất
                    </button>
                  </Link>
                </div>
              </div>

              <div
                className="settings-tab-content"
                id="notifications-settings"
              />
              {showcard && (
                <div className="modal-overlay">
                  <section className="card" style={{ marginTop: "20px" }}>
                    <button
                      className="cancel-button"
                      onClick={() => setShowCard(false)}
                    >
                      x
                    </button>
                    <AppraiserForm />
                  </section>
                </div>
              )}
              {showSupportForm && (
                <div className="modal-overlay">
                  <section className="card" style={{ marginTop: "20px" }}>
                    <button
                      className="cancel-button"
                      onClick={() => setSupportForm(false)}
                    >
                      x
                    </button>
                    <SupportForm />
                  </section>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
