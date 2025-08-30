import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerProductsPage() {
  return (
    <>
      <BuyerHeader />
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="page-title">Sản phẩm</h1>
            <p className="page-subtitle">Khám phá các mẫu đồng hồ</p>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=300&h=200&fit=crop"
              alt="Rolex Submariner"
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">Rolex Submariner 1965</h3>
              <div className="product-price">85,000,000 VNĐ</div>
              <button className="btn btn-outline btn-sm">❤️ Wishlist</button>
              <button className="btn btn-primary btn-sm">🛒 Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
