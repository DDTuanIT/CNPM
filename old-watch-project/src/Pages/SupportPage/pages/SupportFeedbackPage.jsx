import { SupportHeader } from "../components/SupportHeader";
import { SupportSidebar } from "../components/SupportSidebar";
import "../styles/SupportFeedbackPage.css";

export function SupportFeedbackPage() {
  return (
    <>
      <SupportHeader />
      <div className="support-layout">
        <SupportSidebar />
        <main className="support-main">
          <h2>⭐ Feedback</h2>
          <p>Người dùng có thể gửi đánh giá về dịch vụ hỗ trợ tại đây.</p>
        </main>
      </div>
    </>
  );
}
