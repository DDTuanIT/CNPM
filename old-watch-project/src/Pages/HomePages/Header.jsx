import { Link } from 'react-router-dom';
import './Header.css'
export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div
            style={{ display: "flex", alignItems: "center", gap: 1.5 + "rem" }}
          >
            <Link to='/' className="logo">
              <img className="logo-web" src="logo-web.png" alt="" />
              <span className="logo-text">VintageTime</span>
            </Link>
            <nav className="nav">
              <a href="#" className="active">
                Trang chủ
              </a>
              <a href="#">Khám phá</a>
              <a href="#">Thẩm định</a>
              <a href="#">Cộng đồng</a>
            </nav>
          </div>
          <div className="header-actions">
            <div className="search-box">
              <svg
                className="search-icon icon-sm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input  type="text" placeholder="Tìm đồng hồ..." />
            </div>
            <a href="/LoginPage" className="btn btn-outline">
              Đăng nhập
            </a>
            <a href="/Register" className="btn btn-primary">
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
