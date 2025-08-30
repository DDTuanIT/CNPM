import { BuyerHeader } from "./BuyerHeader";
import { Footer } from "../Footer/Footer";
import "./BuyerDashBoard.css";
import "./PageHeader.css";

export function BuyerDashBoard() {
  return (
    <>
      <BuyerHeader />
      <main className="main">
        <div className="container">
          <div className="page-header">
            <div>
              <h1 className="page-title">Tổng quan Buyer</h1>
              <p className="page-subtitle">Quản lý đơn hàng của bạn</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">15</div>
                <div className="stat-title">Tổng đơn hàng</div>
              </div>
            </div>
            <div className="stat-card orange">
              <div className="stat-content">
                <div className="stat-number">2</div>
                <div className="stat-title">Chờ xác nhận</div>
              </div>
            </div>
            <div className="stat-card blue">
              <div className="stat-content">
                <div className="stat-number">1</div>
                <div className="stat-title">Đang giao</div>
              </div>
            </div>
            <div className="stat-card green">
              <div className="stat-content">
                <div className="stat-number">12</div>
                <div className="stat-title">Hoàn thành</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
