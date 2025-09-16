import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../../Footer/Footer";
import axios from "axios";
import { SupportGrid } from "./SupportGrid";
import { UserContext } from "../../Context/UserContext";

export function SupportPage() {
  const [supportTickets, setSupportTickets] = useState([]);
  const { user } = useContext(UserContext);
    const nav = useNavigate();
    useEffect(() => {
      if (!user) nav("/LoginPage");
    });
  const loadData = async () => {
    const response = await axios.get(
      "http://localhost:6868/api/support_ticket"
    );
    setSupportTickets(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <>
      <Header />
      <div id="orders-page">
        <div className="container">
          <div className="page-header">
            <div>
              <Link to="/SellerDashBoard">
                <button className="btns btns-outline back-button">
                  ← Quay lại Dashboard
                </button>
              </Link>

              <h1 className="page-title">Lịch sử gửi cầu hỗ trợ</h1>
            </div>
          </div>

          <div className="status-grid">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">
                  {
                    supportTickets.filter(
                      (sp) =>
                        sp.user_id.toUpperCase() === user.user_id.toUpperCase()
                    ).length
                  }
                </div>
                <div className="stat-title">Tổng số yêu cầu đã gửi</div>
              </div>
            </div>
            {/* <div className="stat-card orange">
              <div className="stat-content">
                <div className="stat-number">5</div>
                <div className="stat-title">Chờ xử lý</div>
              </div>
            </div>
            <div className="stat-card blue">
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-title">Đang giao</div>
              </div>
            </div>
            <div className="stat-card green">
              <div className="stat-content">
                <div className="stat-number">20</div>
                <div className="stat-title">Hoàn thành</div>
              </div>
            </div> */}
          </div>

          <SupportGrid supportTickets={supportTickets} loadData={loadData}/>
        </div>
      </div>
      <Footer />
    </>
  );
}
