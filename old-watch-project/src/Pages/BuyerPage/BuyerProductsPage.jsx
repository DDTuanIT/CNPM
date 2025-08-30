import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerProductsPage() {
  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Sản phẩm đã mua</h1>
          <p className="page-subtitle">Danh sách sản phẩm bạn đã mua.</p>
          {/* TODO: render danh sách sản phẩm đã mua */}
        </div>
      </main>
      <Footer />
    </>
  );
}
