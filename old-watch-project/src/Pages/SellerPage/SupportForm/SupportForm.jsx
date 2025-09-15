import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import dayjs from "dayjs";
import axios from "axios";
import "./SupportForm.css";

export function SupportForm() {
  const { user } = useContext(UserContext);
  const nav = useNavigate();
  const disRef = useRef(null);
  const timeCurrent = dayjs();
  const handleSubmitButton = async () => {
    const disData = disRef.current.value;
    try {
      const response = await axios.post(
        "http://localhost:6868/api/support_ticket",
        {
          support_ticket_id: crypto.randomUUID(),
          user_id: user.user_id,
          issue_description: disData,
          create_at: timeCurrent.format("YYYY-MM-DD HH:mm:ss"),
          response_at: null,
          response: null,
          status: "pending"
        }
      );
      response;
      alert(
        "Gửi yêu cầu hỗ trợ thành công, vui lòng theo dõi lịch sử hỗ trợ để xem phản hồi"
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
                <div className="title">Phiếu gửi yêu cầu hỗ trợ</div>
              </div>

              <div className="dl">
                <div className="upload-area des-zone ">
                  <div className="drop-area des-zone">
                    <textarea
                      ref={disRef}
                      id="description"
                      placeholder="Hãy mô tả vấn đề bạn đang gặp phải tại đây, chúng tôi sẽ phản hồi lại bạn trong thời gian sớm nhất có thể"
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
