import { SupportHeader } from "../components/SupportHeader";
import { SupportFooter } from "../components/SupportFooter";
import "../styles/SupportChatPage.css";

export function SupportChatPage() {
  return (
    <div className="support-layout">
      <SupportHeader />
      <div className="main-container">
        <main className="chat-main">
          <h1>Hỗ trợ trực tuyến</h1>
          <div className="chat-box">
            <div className="message user">Xin chào, tôi cần hỗ trợ!</div>
            <div className="message support">Chào bạn, tôi có thể giúp gì?</div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Nhập tin nhắn..." />
            <button className="btn-primary">Gửi</button>
          </div>
        </main>
      </div>
      <SupportFooter />
    </div>
  );
}
