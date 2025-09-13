import { SupportHeader } from "../components/SupportHeader";
import { SupportSidebar } from "../components/SupportSidebar";
import "../styles/SupportDashBoard.css";

export function SupportDashBoard() {
  return (
    <>
      <SupportHeader />
      <div className="support-layout">
        <SupportSidebar />
        <main className="support-main">
          <h2>📊 Dashboard</h2>
          <p>Tổng quan tình trạng hỗ trợ, số ticket đang mở và phản hồi gần đây.</p>
        </main>
      </div>
    </>
  );
}
