import {Link} from 'react-router-dom'

import '../Header/Header.css'
import './Header.css'
export function Header() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img className="logo-web" src="logo-web.png" alt="" />
              <span className="logo-text">VintageTime</span>
            </Link>

            <nav className="nav-menu">
              <a href="#" className="nav-link active">
                Dashboard
              </a>
              <a href="#" className="nav-link">
                Sản phẩm
              </a>
              <a href="#" className="nav-link">
                Đơn hàng
              </a>
              <a href="#" className="nav-link">
                Thống kê
              </a>
              <a href="#" className="nav-link">
                Cài đặt
              </a>
            </nav>

            <div className="header-actions">
              <button
                className="btn btn-primary"
                onclick="showPage('add-product')"
              >
                + Thêm sản phẩm
              </button>
            </div>
          </div>
        </div>
      </header>
    );
}