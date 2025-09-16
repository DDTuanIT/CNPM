import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import dayjs from "dayjs";
import { ModifySupportForm } from "../ModifySupportForm/ModifySupportForm";
import axios from "axios";
export function Support({ supportTicket, loadData }) {
  const { user } = useContext(UserContext);
    const nav = useNavigate();
    useEffect(() => {
      if (!user) nav("/LoginPage");
    });
  const [showSupportForm, setSupportForm] = useState(false);
  const handleDeleteButton = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:6868/api/support_ticket/${supportTicket.support_ticket_id}`
      );
      alert('Xóa yêu cầu thành công')
      loadData()
      response;
    } catch (e) {
      alert(`ERR ${e}`);
    }
  };
  if (user.user_id === supportTicket.user_id) {
    return (
      <div className="order-card card-relative">
        <div className="order-info">
          <h3 className="order-id">
            Mã yêu cầu: {supportTicket.support_ticket_id.toUpperCase()}
          </h3>
          <p className="order-product">
            Vấn đề: {supportTicket.issue_description}
          </p>
          <p className="order-customer">
            Mã khách hàng: {supportTicket.user_id.toUpperCase()}
          </p>
          <p className="order-date">
            Ngày tạo hỗ trợ:{" "}
            {dayjs(supportTicket.create_at).format("DD/MM/YYYY")}
          </p>
          <p className="order-date">
            Trạng thái yêu cầu:{" "}
            {supportTicket.status === "pending"
              ? "Đang chờ xử lý"
              : "Đã phản hồi"}
          </p>{" "}
          <p className="order-date">
            Phản hồi:{" "}
            {!supportTicket.response
              ? "Chưa có phản hồi"
              : supportTicket.response}
          </p>
          <button
            className="btns btns-outline bt-sp"
            onClick={() => {
              setSupportForm(true);
            }}
          >
            Chỉnh sửa
          </button>
          <button className="btns btns-outline bt-sp-2" onClick={handleDeleteButton}>Xóa</button>
          {showSupportForm && (
            <div className="modal-overlay">
              <section className="card" style={{ marginTop: "20px" }}>
                <button
                  className="cancel-button"
                  onClick={() => setSupportForm(false)}
                >
                  x
                </button>
                <ModifySupportForm supportTicket={supportTicket} />
              </section>
            </div>
          )}
        </div>
      </div>
    );
  }
}
