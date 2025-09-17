import React from "react";
import { useParams } from "react-router-dom";
import { BuyerHeader } from "../components/BuyerHeader";
import { Footer } from "../../Footer/Footer";

export function BuyerProductDetail() {
  const { id } = useParams();

  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Chi tiết sản phẩm</h1>
          <p>ID sản phẩm: {id}</p>
          {/* TODO: render thông tin chi tiết sản phẩm ở đây */}
        </div>
      </main>
      <Footer />
    </>
  );
}
