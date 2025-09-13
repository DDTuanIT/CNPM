import { BuyerHeader } from "../components/BuyerHeader";
import { Footer } from "../../Footer/Footer";

export function BuyerCartPage() {
  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Giỏ hàng</h1>
          <p className="page-subtitle">Các sản phẩm bạn đã thêm vào giỏ hàng.</p>
          {/* TODO: render danh sách giỏ hàng */}
        </div>
      </main>
      <Footer />
    </>
  );
}
