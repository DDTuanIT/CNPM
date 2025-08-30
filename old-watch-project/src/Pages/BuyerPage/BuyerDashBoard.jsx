import { Fragment } from "react";
import { BuyerHeader } from "./BuyerHeader";
import { BuyerStatusGrid } from "./BuyerStatusGrid";
import { BuyerTabContainer } from "./BuyerTabContainer";
import { Footer } from "../Footer/Footer";
import "./BuyerDashBoard.css";
import "./BuyerPageHeader.css";

export function BuyerDashBoard() {
  return (
    <Fragment>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <div className="buyer-page-header">
            <h2 className="buyer-page-title">Buyer Dashboard</h2>
            <p className="buyer-page-subtitle">Quản lý đơn hàng và Wishlist</p>
            <div className="buyer-page-actions">
              <button>Đơn hàng</button>
              <button>Wishlist</button>
            </div>
          </div>

          <BuyerStatusGrid />
          <BuyerTabContainer />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
