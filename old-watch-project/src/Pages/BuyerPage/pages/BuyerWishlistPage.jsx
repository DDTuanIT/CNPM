import React from "react";
import { BuyerHeader } from "../components/BuyerHeader";
import { BuyerFooter } from "../components/BuyerFooter";
import "../styles/BuyerWishlistPage.css";

export function BuyerWishlistPage() {
  // Danh sách sản phẩm mẫu
  const wishlistItems = [
    {
      id: 1,
      name: "Rolex Submariner Date 126610LN",
      brand: "Rolex",
      year: 2020,
      condition: "Excellent",
      seller: "Nguyễn Watch Store",
      price: 285000000,
      oldPrice: 300000000,
      status: "Giá thay đổi",
      image: "/images/rolex.png"
    },
    {
      id: 2,
      name: "Omega Speedmaster Professional",
      brand: "Omega",
      year: 2018,
      condition: "Very Good",
      seller: "TimeVintage Co",
      price: 145000000,
      oldPrice: null,
      status: "Còn hàng",
      image: "/images/omega.png"
    },
    {
      id: 3,
      name: "Tudor Black Bay 58",
      brand: "Tudor",
      year: 2021,
      condition: "Good",
      seller: "Luxury Timepieces",
      price: 95000000,
      oldPrice: null,
      status: "Đã bán",
      image: "/images/tudor.png"
    }
  ];

  return (
    <div className="wishlist-container">
      {/* Header */}
      <BuyerHeader />

      {/* Tiêu đề */}
      <div className="wishlist-header">
        <h2>❤️ Danh sách yêu thích</h2>
        <p>Theo dõi những chiếc đồng hồ bạn quan tâm</p>
      </div>

      {/* Bộ lọc & thống kê */}
      <div className="wishlist-summary">
        <div>Tổng sản phẩm: {wishlistItems.length}</div>
        <div>Còn hàng: {wishlistItems.filter(i => i.status === "Còn hàng").length}</div>
        <div>Giá thay đổi: {wishlistItems.filter(i => i.status === "Giá thay đổi").length}</div>
        <div>Đã bán: {wishlistItems.filter(i => i.status === "Đã bán").length}</div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            <img src={item.image} alt={item.name} className="wishlist-image" />

            <div className="wishlist-info">
              <h3>{item.name}</h3>
              <p>{item.brand} • {item.year} • {item.condition}</p>
              <p>Người bán: {item.seller}</p>

              <div className="wishlist-price">
                <span className="price">{item.price.toLocaleString()} đ</span>
                {item.oldPrice && (
                  <span className="old-price">{item.oldPrice.toLocaleString()} đ</span>
                )}
              </div>

              <span className={`status ${item.status.replace(" ", "-")}`}>
                {item.status}
              </span>

              {/* Nút hành động */}
              <div className="wishlist-actions">
                <button className="btn-detail">Xem chi tiết</button>
                <button className="btn-buy">Mua ngay</button>
                <button className="btn-remove">Bỏ thích</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <BuyerFooter />
    </div>
  );
}
