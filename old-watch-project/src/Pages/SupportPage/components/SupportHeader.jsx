import { Link } from "react-router-dom";
import "../styles/SupportHeader.css";

export function SupportHeader() {
  return (
    <header className="support-header">
      <div className="container">
        <h1 className="logo">🎧 Support Center</h1>
        <nav>
          <Link to="/SupportDashBoard">Dashboard</Link>
          <Link to="/SupportTickets">Tickets</Link>
          <Link to="/SupportChat">Chat</Link>
          <Link to="/SupportFeedback">Feedback</Link>
          <Link to="/SupportSetting">Settings</Link>
        </nav>
      </div>
    </header>
  );
}
