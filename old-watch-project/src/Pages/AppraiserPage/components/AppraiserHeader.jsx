import { Link, NavLink } from "react-router-dom";
import "../styles/AppraiserHeader.css";

export function AppraiserHeader() {
  return (
    <header className="appraiser-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img className="logo-web" src="/logo-web.png" alt="logo" />
            <span className="logo-text">VintageTime</span>
          </Link>
          <nav className="nav">
            <NavLink
              to="/AppraiserDashBoard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/AppraiserRequests"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Yêu cầu
            </NavLink>
            <NavLink
              to="/AppraiserReports"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Báo cáo
            </NavLink>
            <NavLink
              to="/AppraiserSetting"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cài đặt
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
