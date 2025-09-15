import { SupportHeader } from "../components/SupportHeader";
import { SupportSidebar } from "../components/SupportSidebar";
import "../styles/SupportTicketsPage.css";

export function SupportTicketsPage() {
  return (
    <>
      <SupportHeader />
      <div className="support-layout">
        <SupportSidebar />
        <main className="support-main">
          <h2>🎟 Tickets</h2>
          <div className="tickets-list">
            <div className="ticket-card">Ticket #001 - Pending</div>
            <div className="ticket-card">Ticket #002 - In Progress</div>
          </div>
        </main>
      </div>
    </>
  );
}
