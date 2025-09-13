import { Link } from "react-router-dom";
import "../styles/AppraiserTabContainer.css";

export function AppraiserTabContainer() {
  return (
    <div className="tab-container">
      <div className="tab-nav">
        <Link to="/AppraiserRequests" className="tab-btn">
          📥 Yêu cầu
        </Link>
        <Link to="/AppraiserReports" className="tab-btn">
          📑 Báo cáo
        </Link>
        <Link to="/AppraiserSetting" className="tab-btn">
          ⚙️ Cài đặt
        </Link>
      </div>
    </div>
  );
}
