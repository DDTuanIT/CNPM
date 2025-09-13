import { BuyerHeader } from "../components/BuyerHeader";
import { Footer } from "../../Footer/Footer";

export function BuyerCheckoutPage() {
  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Thanh toán</h1>
          <p className="page-subtitle">Xác nhận và hoàn tất đơn hàng của bạn.</p>
          {/* TODO: form thanh toán */}
        </div>
      </main>
      <Footer />
    </>
  );
}
