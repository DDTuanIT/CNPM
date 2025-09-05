import { Footer } from "../../Footer/Footer";
import { Header } from "../Header";
import { useState, useEffect } from "react";
import { ProductGrid } from "./ProductGrid";
import { Link } from "react-router-dom";
import axios from "axios";
export function ProductManagePage() {
  const [tab, setTab] = useState(0);
  const [productDraffs, setProductDraffs] = useState([]);
  const loadProductDraff = async () => {
    const response = await axios.get("http://localhost:6868/api/watchDraff");
    setProductDraffs(response.data);
  };
  useEffect(() => {
    loadProductDraff();
  }, []);


  return (
    <>
      <Header />
      <div id="product-management-page">
        <div className="container">
          <div className="page-header">
            <div>
              <Link to="/SellerDashBoard">
                <button className="btns btns-outline back-button">
                  ← Quay lại Dashboard
                </button>
              </Link>
              <div></div>
              <h1 className="page-title">Quản lý sản phẩm</h1>
              <p className="page-subtitle">
                Quản lý và chỉnh sửa sản phẩm của bạn
              </p>
            </div>
            <div className="page-actions"></div>
          </div>

          <div className="card">
            <div className="card-content">
              <div className="filter-tabs">
                <button
                  className={tab === 0 ? "filter-btn active" : "filter-btn"}
                  onClick={() => setTab(0)}
                >
                  Tất cả
                </button>
                <button
                  className={tab === 1 ? "filter-btn active" : "filter-btn"}
                  onClick={() => setTab(1)}
                >
                  Đang bán
                </button>
                <button
                  className={tab === 2 ? "filter-btn active" : "filter-btn"}
                  onClick={() => setTab(2)}
                >
                  Chờ duyệt
                </button>
                <button
                  className={tab === 3 ? "filter-btn active" : "filter-btn"}
                  onClick={() => setTab(3)}
                >
                  Đã bán
                </button>
                <button
                  className={tab === 4 ? "filter-btn active" : "filter-btn"}
                  onClick={() => setTab(4)}
                >
                  Đã ẩn
                </button>
              </div>
            </div>
          </div>

          <ProductGrid
            tab={tab}
            productDraffs={productDraffs}
            loadProductDraff={loadProductDraff}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
