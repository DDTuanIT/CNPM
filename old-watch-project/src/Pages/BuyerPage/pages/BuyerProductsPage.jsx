import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BuyerHeader } from "../components/BuyerHeader";
import { BuyerFooter } from "../components/BuyerFooter";
import "../styles/BuyerProductsPage.css";

export function BuyerProductsPage() {
  const navigate = useNavigate();

  const sampleListings = [
    {
      id: 1,
      title: "Citizen Automatic",
      brand: "Citizen",
      year: "1980",
      condition: "Good",
      price: 5500000,
      originalPrice: 6000000,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26",
      rating: 4.3,
      seller: "RetroTime",
    },
    {
      id: 2,
      title: "Rolex Submariner 1965",
      brand: "Rolex",
      year: "1965",
      condition: "Excellent",
      price: 85000000,
      originalPrice: 95000000,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      rating: 4.8,
      seller: "WatchExpert123",
    },
  ];

  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Tất cả");

  const filteredListings = useMemo(() => {
    return sampleListings.filter((item) => {
      const matchBrand =
        selectedBrand === "Tất cả" || item.brand === selectedBrand;
      const matchSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchBrand && matchSearch;
    });
  }, [searchTerm, selectedBrand]);

  // ✅ Hàm xử lý bấm nút
  const handleView = (id) => {
    navigate(`/BuyerProductDetail/${id}`);
  };

  const handleBuy = (product) => {
    // Lưu vào localStorage làm giỏ hàng demo
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Chuyển sang giỏ hàng
    navigate("/BuyerCart");
  };

  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container browse-page">
          {/* Sidebar */}
          <aside className="sidebar">
            <h3>Bộ lọc</h3>
            <div className="filter-group">
              <p>Thương hiệu</p>
              {["Tất cả", "Citizen", "Rolex"].map((brand) => (
                <label key={brand} className="checkbox">
                  <input
                    type="radio"
                    checked={selectedBrand === brand}
                    onChange={() => setSelectedBrand(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <div className="main-content">
            <div className="toolbar">
              <input
                type="text"
                placeholder="🔍 Tìm kiếm đồng hồ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-box"
              />
              <div className="view-buttons">
                <button
                  className={viewMode === "grid" ? "active" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  🔲 Grid
                </button>
                <button
                  className={viewMode === "list" ? "active" : ""}
                  onClick={() => setViewMode("list")}
                >
                  📋 List
                </button>
              </div>
            </div>

            <div className={`products ${viewMode}`}>
              {filteredListings.map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.image} alt={item.title} />
                  <div className="info">
                    <h4>{item.title}</h4>
                    <p>
                      {item.brand} • {item.year} • {item.condition}
                    </p>
                    <p>
                      ⭐ {item.rating} | {item.seller}
                    </p>
                    <div className="price">
                      <span className="current">
                        {item.price.toLocaleString()} ₫
                      </span>
                      <span className="old">
                        {item.originalPrice.toLocaleString()} ₫
                      </span>
                    </div>
                    <div className="actions">
                      <button
                        className="btn"
                        onClick={() => handleView(item.id)}
                      >
                        👁️ Xem
                      </button>
                      <button
                        className="btn primary"
                        onClick={() => handleBuy(item)}
                      >
                        🛒 Mua
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <BuyerFooter />
    </>
  );
}
