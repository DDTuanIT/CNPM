import { useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import axios from "axios";
import "./AppraiserForm.css";

export function AppraiserForm() {
  const { user } = useContext(UserContext);

  const jobRef = useRef(null);
  const exRef = useRef(null);
  const cerRef = useRef(null);
  const nav = useNavigate();

    useEffect(() => {
      if (!user) nav("/LoginPage");
    });
  const handleSubmitButton = async () => {
    const jobData = jobRef.current.value;
    const exData = exRef.current.value;
    const cerData = cerRef.current.value;
    try {
      const response = await axios.post(
        "http://localhost:6868/api/AppraiserForm",
        {
          appraiser_form_id: crypto.randomUUID(),
          user_id: user.user_id,
          phone_number: user.phone_number,
          email: user.email,
          address: user.address,
          current_job: jobData,
          experience_years: exData,
          certificate: cerData,
        }
      );
      response;
      alert(
        "Gửi yêu cầu thành công vui lòng đợi ít hôm để quản trị viên duyệt"
      );
      nav("/SellerDashBoard");
    } catch (e) {
      alert(`Bạn đã gửi yêu cầu trước đó rồi, vui lòng đợi chúng tôi phản hồi`);
    }
  };

  return (
    <>
      <>
        <main>
          <div className="card-body">
            <div className="paper">
              <div className="paper-head">
                <div className="title">Phiếu đăng ký trở thành thẩm định viên</div>
              </div>

              <div className="dls">
                <div className="item">
                  <div className="label">Công việc hiện tại</div>
                  <input
                    ref={jobRef}
                    type="text"
                    className="value"
                    name=""
                    id=""
                  />
                </div>

                <div className="item">
                  <div className="label">Số năm kinh nghiệm</div>
                  <input
                    ref={exRef}
                    type="text"
                    className="value"
                    name=""
                    id=""
                  />
                </div>
                <div className="item">
                  <div className="label">Bằng cấp (trình độ)</div>
                  <input
                    ref={cerRef}
                    type="text"
                    className="value"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>

            <div className="actions" style={{ marginTop: "16px" }}></div>
            <button type="button" className="btns btns-outline send-button" onClick={handleSubmitButton}>
              Gửi
            </button>
          </div>
        </main>
      </>
    </>
  );
}
