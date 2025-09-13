import { AppraiserHeader } from "../components/AppraiserHeader";
import { AppraiserFooter } from "../components/AppraiserFooter";
import "../styles/AppraiserReportsPage.css";

export function AppraiserReportsPage() {
  return (
    <>
      <AppraiserHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Báo cáo đã gửi</h1>
          <div className="reports-list">
            <div className="report-card">
              <h3>Báo cáo #REP001</h3>
              <p>Sản phẩm: Rolex Submariner 1965</p>
              <p>Ngày gửi: 02/09/2025</p>
            </div>

            <div className="report-card">
              <h3>Báo cáo #REP002</h3>
              <p>Sản phẩm: Omega Speedmaster</p>
              <p>Ngày gửi: 28/08/2025</p>
            </div>
          </div>
        </div>
      </main>
      <AppraiserFooter />
    </>
  );
}
