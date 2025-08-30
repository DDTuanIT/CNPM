import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerWishlistPage() {
  return (
    <>
      <BuyerHeader />
      <div className="container">
        <div className="page-header">
          <div>
            <h1 className="page-title">Wishlist</h1>
            <p className="page-subtitle">Sản phẩm bạn đã lưu</p>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop"
              alt="Omega Speedmaster"
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-title">Omega Speedmaster</h3>
              <div className="product-price">45,000,000 VNĐ</div>
              <button className="btn btn-outline btn-sm">❌ Xóa</button>
              <button className="btn btn-primary btn-sm">🛒 Mua ngay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
