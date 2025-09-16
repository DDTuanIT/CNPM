import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/SupportHeader.css";

export function SupportHeader() {
  const [open, setOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const avatarUrl = "/avatar.jpg";
  const initials = "VT";

  return (
    <header className="support-header">
      <div className="container">
        <div className="support-header-content">
          {/* Logo */}
          <Link to="/" className="support-logo">
            <img className="support-logo-img" src="logo-web.png" alt="VintageTime" />
            <span className="support-logo-text">VintageTime</span>
          </Link>

          {/* Navigation */}
          <nav className="support-nav">
            <NavLink to="/SupportDashBoard" className={({ isActive }) => (isActive ? "support-active" : "")} end>
              DashBoard
            </NavLink>
            <NavLink to="/SupportTickets" className={({ isActive }) => (isActive ? "support-active" : "")}>
              Yêu cầu
            </NavLink>
            <NavLink to="/SupportFeedback" className={({ isActive }) => (isActive ? "support-active" : "")}>
              Khiếu nại
            </NavLink>
            <NavLink to="/SupportSetting" className={({ isActive }) => (isActive ? "support-active" : "")}>
              Xử lý
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="support-header-actions" ref={menuRef}>
            {/* Bell */}
            <button className="icon-btn" title="Thông báo">
              🔔
              <span className="badge">3</span>
            </button>

            {/* Avatar + Name */}
            <div className="user-area">
              <button type="button" className="user-trigger" onClick={() => setOpen(!open)}>
                {!avatarError ? (
                  <img
                    src={avatarUrl}
                    alt="Nguyễn CSKH"
                    className="user-avatar"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="avatar-fallback">{initials}</div>
                )}
                <span className="user-name">Nguyễn CSKH</span>
              </button>

              {open && (
                <div className="user-dropdown">
                  <div className="user-info">
                    {!avatarError ? (
                      <img
                        src={avatarUrl}
                        alt="Nguyễn CSKH"
                        className="dropdown-avatar"
                        onError={() => setAvatarError(true)}
                      />
                    ) : (
                      <div className="dropdown-avatar-fallback">{initials}</div>
                    )}
                    <div className="dropdown-name">Nguyễn CSKH</div>
                  </div>
                  <Link to="/tai-khoan" className="dropdown-item">👤 Hồ sơ</Link>
                  <Link to="/thong-bao" className="dropdown-item">⏰ Thông báo</Link>
                  <div className="dropdown-sep" />
                  <button type="button" className="dropdown-item logout" onClick={() => (window.location.href = "/logout")}>
                    🚪 Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
