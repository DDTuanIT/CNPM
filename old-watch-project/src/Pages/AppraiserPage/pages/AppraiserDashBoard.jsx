import { Fragment } from "react";
import { AppraiserHeader } from "../components/AppraiserHeader";
import { AppraiserTabContainer } from "../components/AppraiserTabContainer";
import { AppraiserFooter } from "../components/AppraiserFooter";
import "../styles/AppraiserDashBoard.css";

export function AppraiserDashBoard() {
  return (
    <Fragment>
      <AppraiserHeader />
      <main className="main">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Bảng điều khiển Thẩm định viên</h1>
            <p className="page-subtitle">
              Quản lý yêu cầu, báo cáo và cài đặt cá nhân
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">12</div>
              <div className="stat-title">Yêu cầu chờ xử lý</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30</div>
              <div className="stat-title">Báo cáo đã gửi</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-title">Đang thực hiện</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40</div>
              <div className="stat-title">Tổng số yêu cầu</div>
            </div>
          </div>

          <AppraiserTabContainer />
        </div>
      </main>
      <AppraiserFooter />
    </Fragment>
  );
}
