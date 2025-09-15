import { SupportHeader } from "../components/SupportHeader";
import { SupportSidebar } from "../components/SupportSidebar";
import "../styles/SupportChatPage.css";

export function SupportChatPage() {
  return (
    <>
      <SupportHeader />
      <div className="support-layout">
        <SupportSidebar />
        <main className="support-main">
          <h2>💬 Chat</h2>
          <div className="chat-box">
            <div className="message user">User: Tôi cần giúp đỡ.</div>
            <div className="message support">Support: Vâng, tôi sẽ hỗ trợ bạn ngay.</div>
          </div>
        </main>
      </div>
    </>
  );
}
