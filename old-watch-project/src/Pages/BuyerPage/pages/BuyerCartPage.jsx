import React, { useState } from "react";
import { BuyerHeader } from "../components/BuyerHeader";
import { Footer } from "../../Footer/Footer";
import "../styles/BuyerCartPage.css"; // nhớ tạo CSS

export function BuyerCartPage() {
  // Dữ liệu mẫu giỏ hàng
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Rolex Submariner 1965",
      brand: "Rolex",
      year: "1965",
      condition: "Excellent",
      seller: "WatchExpert123",
      price: 85000000,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 2,
      title: "Omega Speedmaster Professional",
      brand: "Omega",
      year: "1970",
      condition: "Very Good",
      seller: "TimeMaster",
      price: 45000000,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10?w=500",
    },
  ]);

  // Tính tổng tiền
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = subtotal * 0.1;
  const total = subtotal + vat;

  // Hàm tăng giảm số lượng
  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // Xóa sản phẩm
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <BuyerHeader />
      <main className="main cart-page">
        <div className="container cart-container">
          <h1 className="cart-title">Giỏ hàng của bạn</h1>
          <p className="cart-subtitle">{cartItems.length} sản phẩm</p>

          <div className="cart-content">
            {/* Danh sách sản phẩm */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-info">
                    <h3>{item.title}</h3>
                    <p>
                      {item.brand} • {item.year} • {item.condition}
                    </p>
                    <p className="cart-seller">Người bán: {item.seller}</p>
                    <p className="cart-price">
                      {item.price.toLocaleString("vi-VN")} ₫
                    </p>
                  </div>

                  {/* Nút số lượng */}
                  <div className="cart-quantity">
                    <button onClick={() => updateQuantity(item.id, "dec")}>
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, "inc")}>
                      +
                    </button>
                  </div>

                  {/* Xóa / Wishlist */}
                  <div className="cart-actions">
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      🗑
                    </button>
                    <button className="wishlist-btn">❤️</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Tóm tắt đơn hàng */}
            <div className="cart-summary">
              <h3>Tóm tắt đơn hàng</h3>
              <div className="summary-row">
                <span>Tạm tính ({cartItems.length} sản phẩm)</span>
                <span>{subtotal.toLocaleString("vi-VN")} ₫</span>
              </div>
              <div className="summary-row">
                <span>Phí vận chuyển</span>
                <span className="free">Miễn phí</span>
              </div>
              <div className="summary-row">
                <span>VAT (10%)</span>
                <span>{vat.toLocaleString("vi-VN")} ₫</span>
              </div>
              <div className="summary-total">
                <span>Tổng cộng</span>
                <span>{total.toLocaleString("vi-VN")} ₫</span>
              </div>

              {/* Nút thanh toán */}
              <button className="checkout-btn">Thanh toán đơn hàng</button>
              <button className="continue-btn">Tiếp tục mua sắm</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
