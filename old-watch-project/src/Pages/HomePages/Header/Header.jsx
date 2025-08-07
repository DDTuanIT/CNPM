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
              <a href="/" className="active">
                Trang chủ
              </a>
              <Link to="/ExplorePage">Khám phá</Link>
              <a href="#">Thẩm định</a>
              <a href="#">Cộng đồng</a>
            </nav>
          </div>
          <div className="header-actions">
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
