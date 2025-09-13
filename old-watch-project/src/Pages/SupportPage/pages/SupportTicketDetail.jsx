import { SupportHeader } from "../components/SupportHeader";
import { SupportSidebar } from "../components/SupportSidebar";

export function SupportTicketDetail() {
  return (
    <>
      <SupportHeader />
      <div className="support-layout">
        <SupportSidebar />
        <main className="support-main">
          <h2>Ticket #001</h2>
          <p>Chi tiết ticket, tình trạng xử lý và phản hồi từ nhân viên.</p>
        </main>
      </div>
    </>
  );
}
