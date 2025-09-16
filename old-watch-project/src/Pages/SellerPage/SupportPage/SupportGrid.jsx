import { Support } from "./Support";

export function SupportGrid({ supportTickets, loadData }) {
  return (
    <div className="orders-list">
      {supportTickets.map((supportTicket) => {
        return (
          <Support
            key={`${supportTicket.support_ticket_id}`}
            supportTicket={supportTicket}
            loadData={loadData}
          />
        );
      })}
    </div>
  );
}
