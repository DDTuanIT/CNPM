import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppraisalReport } from "../AppraisalReportPage/AppraisalReport";
import spinner from "../../../assets/loading-spinner.gif";
import "../AppraisalReportPage/AppraisalReport.css";
export function Product({ productDraff, loadProductDraff }) {
  const [showcard, setShowCard] = useState(false);
  const [appraisalReports, setAppraisalReports] = useState(null);
  const handleDeleteButton = async () => {
    try {
      if (appraisalReports) {
        const rep = await axios.delete(
          `http://localhost:6868/api/appraisalReport/${appraisalReports.appraisal_report_id}`
        );
        rep;
        const re = await axios.delete(
          `http://localhost:6868/api/watch/${productDraff.watch_id}`
        );
        re;
      }
      //
      const response = await axios.delete(
        `http://localhost:6868/api/watchDraff/${productDraff.watch_id}`
      );
      alert("Xóa thành công");
      loadProductDraff();
      response;
    } catch (e) {
      alert(`ERROR: ${e}`);
    }
  };
  const loadData = async () => {
    const response = await axios.get(
      "http://localhost:6868/api/appraisalReport"
    );
    response;
    const watchCurrent = response.data.find(
      (appr) =>
        appr.watch_id.toUpperCase() === productDraff.watch_id.toUpperCase()
    );

    setAppraisalReports(watchCurrent);
    //
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="product-card">
        <div className="product-image-container">
          {productDraff.image ? (
            <img
              src={productDraff.image}
              alt="Patek Philippe"
              className="product-image"
            />
          ) : (
            <img className="spinner" src={spinner}></img>
          )}

          <div
            className={`product-status ${
              productDraff.status === "sold"
                ? "status-hidden"
                : productDraff.status === "selling"
                ? "status-active"
                : productDraff.status === "pending"
                ? "status-pending"
                : "status-sold"
            }`}
          >
            {productDraff.status === "sold"
              ? "🛑 Đã bán"
              : productDraff.status === "selling"
              ? "🟢 Đang bán"
              : productDraff.status === "pending"
              ? "⏳ Chờ thẩm định"
              : "🌑 Đã ẩn"}
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-title">{productDraff.name}</h3>
          <p className="product-brand">{productDraff.brand}</p>
          <div className="product-price">
            {productDraff.price.toLocaleString("vi-VN")} VNĐ
          </div>
        </div>
        <div className="relation-button">
          <Link to="/EditProductPage" state={{ productDraff }}>
            <button className="bts back-button btns-outline ">Chỉnh sửa</button>
          </Link>

          <button
            className="bts  back-button btns-outline"
            onClick={() => setShowCard(true)}
          >
            Xem thẩm định
          </button>

          <button
            className="bts back-button btns-outline "
            onClick={handleDeleteButton}
          >
            Xóa
          </button>
        </div>
      </div>
      {showcard && (
        <div className="modal-overlay">
          <section className="card" style={{ marginTop: "20px" }}>
            <button
              className="cancel-button"
              onClick={() => setShowCard(false)}
            >
              x
            </button>
            <AppraisalReport productDraff={productDraff} />
          </section>
        </div>
      )}
    </>
  );
}
