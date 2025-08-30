import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerWishlistPage() {
  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Wishlist</h1>
          <p className="page-subtitle">Danh sách sản phẩm bạn yêu thích.</p>
          {/* TODO: render danh sách wishlist */}
        </div>
      </main>
      <Footer />
    </>
  );
}
