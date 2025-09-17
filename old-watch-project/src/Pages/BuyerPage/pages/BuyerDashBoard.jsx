import React, { Fragment } from "react";
import { BuyerStatusGrid } from "./BuyerStatusGrid";
import { BuyerTabContainer } from "../components/BuyerTabContainer";
import { BuyerHeader } from "../components/BuyerHeader";
import { BuyerFooter } from "../components/BuyerFooter";
import "../styles/BuyerDashBoard.css";
import "../styles/BuyerPageHeader.css";

export function BuyerDashBoard() {
  return (
    <Fragment>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          {/* Header */}
          <div className="buyer-page-header">
            <h2 className="buyer-page-title">Buyer Dashboard</h2>
            <p className="buyer-page-subtitle">Quản lý đơn hàng và Wishlist</p>
          </div>

          {/* Stats grid */}
          <BuyerStatusGrid />

          {/* Tab container */}
          <BuyerTabContainer />
        </div>
      </main>
      <BuyerFooter />
    </Fragment>
  );
}
