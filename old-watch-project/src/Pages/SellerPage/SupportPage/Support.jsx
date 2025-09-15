import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import dayjs from "dayjs";
export function Support({ supportTicket }) {
  const { user } = useContext(UserContext);
  if (user.user_id === supportTicket.user_id) {
    return (
      <div className="order-card">
        <div className="order-info">
          <h3 className="order-id">
            Mã yêu cầu: {supportTicket.support_ticket_id.toUpperCase()}
          </h3>
          <p className="order-product">
            Vấn đề: {supportTicket.issue_description}
          </p>
          <p className="order-customer">Mã khách hàng: {supportTicket.user_id.toUpperCase()}</p>
          <p className="order-date">
            Ngày tạo hỗ trợ:{" "}
            {dayjs(supportTicket.create_at).format("DD/MM/YYYY")}
          </p>
          <p className="order-date">
            Trạng thái yêu cầu: {supportTicket.status === "pending" ? "Đang chờ xử lý" : "Đã phản hồi"}
          </p>{" "}
          <p className="order-date">
            Phản hồi: {!supportTicket.response ? "Chưa có phản hồi" : supportTicket.response}
          </p>
        </div>
      </div>
    );
  }
}
