import { Footer } from "../../Footer/Footer";
import { Header } from "../Header";

import { ProductGrid } from "./ProductGrid";
export function ProductManagePage() {
  return (
    <>
      <Header />
      <div id="product-management-page">
        <div className="container">
          <div className="page-header">
            <div>
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
                <button className="filter-btn ">Tất cả (24)</button>
                <button className="filter-btn active">Đang bán (18)</button>
                <button className="filter-btn">Chờ duyệt (3)</button>
                <button className="filter-btn">Đã bán (15)</button>
                <button className="filter-btn">Nháp (2)</button>
                <button className="filter-btn">Đã ẩn (1)</button>
              </div>
            </div>
          </div>

          <ProductGrid />
        </div>
      </div>
      <Footer />
    </>
  );
}
