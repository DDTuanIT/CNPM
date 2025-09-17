import React, { useState } from "react";
import { BuyerHeader } from "../components/BuyerHeader";
import { BuyerFooter } from "../components/BuyerFooter";
import "../styles/BuyerCheckoutPage.css";

export function BuyerCheckoutPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    note: "",
    shipping: "standard",
    payment: "",
  });

  const orderItems = [
    {
      id: 1,
      title: "Rolex Submariner 1965",
      price: 85000000,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=80&h=80&fit=crop",
    },
    {
      id: 2,
      title: "Omega Speedmaster Professional",
      price: 45000000,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=80&h=80&fit=crop",
    },
  ];

  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const vat = subtotal * 0.1;
  const insurance = subtotal * 0.01;
  const fee = 200000;
  const total = subtotal + vat + insurance + fee;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container checkout-page">
          <h1>Thanh toán đơn hàng</h1>
          <p>Hoàn tất thông tin để đặt hàng an toàn</p>

          {/* Progress bar */}
          <div className="checkout-steps">
            <div className={`step ${step === 1 ? "active" : step > 1 ? "done" : ""}`}>
              <div className="step-number">1</div>
              <div className="step-label">Giao hàng</div>
            </div>
            <div className={`step-line ${step > 1 ? "filled" : ""}`}></div>
            <div className={`step ${step === 2 ? "active" : step > 2 ? "done" : ""}`}>
              <div className="step-number">2</div>
              <div className="step-label">Thanh toán</div>
            </div>
            <div className={`step-line ${step > 2 ? "filled" : ""}`}></div>
            <div className={`step ${step === 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <div className="step-label">Xác nhận</div>
            </div>
          </div>

          <div className="checkout-content">
            {/* Left */}
            <div className="checkout-left">
              {step === 1 && (
                <div className="checkout-step">
                  <h2>Thông tin giao hàng</h2>
                  <div className="form-grid">
                    <input
                      type="text"
                      placeholder="Tên"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Họ"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-grid">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                  <div className="form-grid">
                    <input
                      type="text"
                      placeholder="Thành phố"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Quận/Huyện"
                      value={formData.district}
                      onChange={(e) =>
                        setFormData({ ...formData, district: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Phường/Xã"
                      value={formData.ward}
                      onChange={(e) =>
                        setFormData({ ...formData, ward: e.target.value })
                      }
                    />
                  </div>
                  <textarea
                    placeholder="Ghi chú giao hàng"
                    value={formData.note}
                    onChange={(e) =>
                      setFormData({ ...formData, note: e.target.value })
                    }
                  />
                  <h3>Phương thức giao hàng</h3>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={formData.shipping === "standard"}
                        onChange={(e) =>
                          setFormData({ ...formData, shipping: e.target.value })
                        }
                      />
                      Giao hàng tiêu chuẩn (Miễn phí)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={formData.shipping === "express"}
                        onChange={(e) =>
                          setFormData({ ...formData, shipping: e.target.value })
                        }
                      />
                      Giao hàng nhanh (1,000,000 đ)
                    </label>
                  </div>
                  <button className="btn-primary" onClick={handleNext}>
                    Tiếp tục
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="checkout-step">
                  <h2>Phương thức thanh toán</h2>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="payment"
                        value="credit"
                        checked={formData.payment === "credit"}
                        onChange={(e) =>
                          setFormData({ ...formData, payment: e.target.value })
                        }
                      />
                      Thẻ tín dụng/Ghi nợ (Visa, MasterCard, JCB)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={formData.payment === "bank"}
                        onChange={(e) =>
                          setFormData({ ...formData, payment: e.target.value })
                        }
                      />
                      Chuyển khoản ngân hàng
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="payment"
                        value="qr"
                        checked={formData.payment === "qr"}
                        onChange={(e) =>
                          setFormData({ ...formData, payment: e.target.value })
                        }
                      />
                      QR Code (MoMo, ZaloPay)
                    </label>
                  </div>
                  <div className="checkout-actions">
                    <button className="btn-outline" onClick={handleBack}>
                      Quay lại
                    </button>
                    <button className="btn-primary" onClick={handleNext}>
                      Tiếp tục
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="checkout-step">
                  <h2>Xác nhận đơn hàng</h2>
                  <div className="confirm-section">
                    <h3>Sản phẩm</h3>
                    {orderItems.map((item) => (
                      <div key={item.id} className="confirm-item">
                        <img src={item.image} alt={item.title} />
                        <div>
                          <p>{item.title}</p>
                          <p>
                            {item.price.toLocaleString()} đ x {item.qty}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="confirm-section">
                    <h3>Thông tin giao hàng</h3>
                    <p>
                      {formData.firstName} {formData.lastName}<br />
                      {formData.phone} - {formData.email}<br />
                      {formData.address}, {formData.ward}, {formData.district},{" "}
                      {formData.city}
                    </p>
                  </div>
                  <div className="confirm-section">
                    <h3>Phương thức thanh toán</h3>
                    <p>{formData.payment}</p>
                  </div>
                  <div className="checkout-actions">
                    <button className="btn-outline" onClick={handleBack}>
                      Quay lại
                    </button>
                    <button className="btn-success">Đặt hàng & Thanh toán</button>
                  </div>
                </div>
              )}
            </div>

            {/* Right */}
            <div className="checkout-right">
              <h3>Tóm tắt đơn hàng</h3>
              {orderItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <span>{item.price.toLocaleString()} đ</span>
                  </div>
                </div>
              ))}
              <div className="summary-total">
                <p>Tạm tính: {subtotal.toLocaleString()} đ</p>
                <p>VAT (10%): {vat.toLocaleString()} đ</p>
                <p>Bảo hiểm (1%): {insurance.toLocaleString()} đ</p>
                <p>Phí xử lý: {fee.toLocaleString()} đ</p>
                <h4>Tổng cộng: {total.toLocaleString()} đ</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BuyerFooter />
    </>
  );
}
