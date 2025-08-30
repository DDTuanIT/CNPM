import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";

export function BuyerCheckoutPage() {
  return (
    <>
      <BuyerHeader />
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Thanh toán</h1>
        </div>

        <form className="checkout-form">
          <label>Địa chỉ giao hàng</label>
          <input type="text" placeholder="Nhập địa chỉ..." />

          <label>Phương thức thanh toán</label>
          <select>
            <option>Ví Escrow</option>
            <option>Thẻ tín dụng</option>
            <option>Chuyển khoản</option>
          </select>

          <button className="btn btn-primary">Xác nhận thanh toán</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
