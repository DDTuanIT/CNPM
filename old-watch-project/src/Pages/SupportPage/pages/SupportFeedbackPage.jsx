import { SupportHeader } from "../components/SupportHeader";
import { SupportFooter } from "../components/SupportFooter";
import "../styles/SupportFeedbackPage.css";

export function SupportFeedbackPage() {
  const feedbacks = [
    { id: 1, text: "Dịch vụ rất tốt, phản hồi nhanh!", user: "Nguyễn Văn A" },
    { id: 2, text: "Cần cải thiện tốc độ xử lý khiếu nại.", user: "Lê Thị B" },
    { id: 3, text: "Nhân viên tư vấn thân thiện, chuyên nghiệp.", user: "Trần Văn C" },
  ];

  return (
    <div className="support-layout">
      <SupportHeader />
      <div className="main-container">
        <main className="feedback-main">
          <h1>Phản hồi khách hàng</h1>
          <div className="feedback-list">
            {feedbacks.map((fb) => (
              <div className="feedback-card" key={fb.id}>
                <p className="feedback-text">{`"${fb.text}"`}</p>
                <span className="feedback-user">- {fb.user}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
      <SupportFooter />
    </div>
  );
}
