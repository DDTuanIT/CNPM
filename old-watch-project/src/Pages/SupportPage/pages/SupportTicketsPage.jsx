import { SupportHeader } from "../components/SupportHeader";
import { SupportFooter } from "../components/SupportFooter";
import "../styles/SupportTicketsPage.css";

export function SupportTicketsPage() {
  return (
    <div className="support-layout">
      <SupportHeader />
      <div className="main-container">
        <main className="tickets-main">
          <h1>Danh sách Tickets</h1>
          <div className="ticket-card">
            <h4>REQ001 - Nguyễn Văn A</h4>
            <p>Hỗ trợ đăng nhập</p>
            <span className="status blue">Đang xử lý</span>
          </div>
          <div className="ticket-card">
            <h4>REQ002 - Lê Thị B</h4>
            <p>Khiếu nại sản phẩm</p>
            <span className="status green">Hoàn thành</span>
          </div>
        </main>
      </div>
      <SupportFooter />
    </div>
  );
}
