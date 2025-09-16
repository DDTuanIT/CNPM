import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import dayjs from "dayjs";
import axios from "axios";
import "./ModifySupportForm.css";

export function ModifySupportForm({ supportTicket }) {
  const { user } = useContext(UserContext);
  const nav = useNavigate();
  const disRef = useRef(null);
  const timeCurrent = dayjs();
  const handleSubmitButton = async () => {
    const disData = disRef.current.value;
    try {
      const response = await axios.put(
        `http://localhost:6868/api/support_ticket`,
        {
          support_ticket_id: supportTicket.support_ticket_id,
          user_id: supportTicket.user_id,
          issue_description: disData,
          create_at: timeCurrent.format("YYYY-MM-DD HH:mm:ss"),
          response_at: null,
          response: null,
          status: "pending",
        }
      );
      response;
      alert(
        "Sửa yêu cầu hỗ trợ thành công, vui lòng theo dõi lịch sử hỗ trợ để xem phản hồi"
      );
      nav("/SellerDashBoard");
    } catch (e) {
      alert(`ERR ${e}`);
    }
  };

  return (
    <>
      <>
        <main>
          <div className="card-body">
            <div className="paper">
              <div className="paper-head">
                <div className="title">Sửa yêu cầu hỗ trợ</div>
              </div>

              <div className="dl">
                <div className="upload-area des-zone ">
                  <div className="drop-area des-zone">
                    <textarea
                      ref={disRef}
                      id="description"
                      placeholder={supportTicket.issue_description}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="actions" style={{ marginTop: "16px" }}></div>
            <button
              type="button"
              className="btns btns-outline"
              onClick={handleSubmitButton}
            >
              Gửi
            </button>
          </div>
        </main>
      </>
    </>
  );
}
