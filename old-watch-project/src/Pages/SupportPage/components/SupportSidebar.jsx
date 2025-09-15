import { NavLink } from "react-router-dom";
import "../styles/SupportSidebar.css";

export function SupportSidebar() {
  return (
    <aside className="support-sidebar">
      <ul>
        <li><NavLink to="/SupportDashBoard">📊 Dashboard</NavLink></li>
        <li><NavLink to="/SupportTickets">🎟 Tickets</NavLink></li>
        <li><NavLink to="/SupportChat">💬 Chat</NavLink></li>
        <li><NavLink to="/SupportFeedback">⭐ Feedback</NavLink></li>
        <li><NavLink to="/SupportSetting">⚙ Settings</NavLink></li>
      </ul>
    </aside>
  );
}
