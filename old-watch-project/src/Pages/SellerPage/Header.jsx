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
              <Link to="/SellerDashBoard" className="nav-link active">
                Trang chủ
              </Link>
              <Link to="/ProductManagePage" className="nav-link">
                Sản phẩm
              </Link>
              <Link to="/OrderPage" className="nav-link">
                Đơn hàng
              </Link>
              <Link to="/SettingPage" className="nav-link">
                Cài đặt
              </Link>
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