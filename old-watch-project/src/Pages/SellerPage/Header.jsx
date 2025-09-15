import {Link, NavLink} from 'react-router-dom'
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
              <nav className="nav-menu">
                <NavLink
                  to="/SellerDashBoard"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Trang chủ
                </NavLink>

                <NavLink
                  to="/ProductManagePage"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Sản phẩm
                </NavLink>

                <NavLink
                  to="/OrderPage"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Đơn hàng
                </NavLink>

                <NavLink
                  to="/SettingPage"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Cài đặt
                </NavLink>
                <NavLink
                  to="/SupportPage"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Lịch sử hỗ trợ
                </NavLink>
              </nav>
            </nav>

            <div className="header-actions">
              <Link to="/LoginPage">
                {" "}
                <button className="btns btns-outline">Đăng xuất</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
}