import { SupportHeader } from "../components/SupportHeader";
import { SupportFooter } from "../components/SupportFooter";
import "../styles/SupportTicketDetail.css";

export function SupportTicketDetail() {
  return (
    <div className="support-layout">
      <SupportHeader />
      <div className="main-container">
        <main className="ticket-detail-main">
          <h1>Chi tiết Ticket</h1>
          <div className="ticket-detail">
            <p><b>Mã:</b> REQ001</p>
            <p><b>Khách hàng:</b> Nguyễn Văn A</p>
            <p><b>Nội dung:</b> Hỗ trợ đăng nhập</p>
            <p><b>Ngày gửi:</b> 16/09/2025</p>
            <button className="btn-primary">Đánh dấu hoàn thành</button>
          </div>
        </main>
      </div>
      <SupportFooter />
    </div>
  );
}
