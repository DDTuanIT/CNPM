import { Link, NavLink } from "react-router-dom";
import "../styles/BuyerHeader.css";

export function BuyerHeader() {
  return (
    <header className="buyer-header">
      <div className="container">
        <div className="buyer-header-content">
          {/* Logo */}
          <Link to="/" className="logo">
              <img className="logo-web" src="logo-web.png" alt="" />
              <span className="logo-text">VintageTime</span>
            </Link>

          {/* Menu Buyer */}
          <nav className="buyer-nav">
            <NavLink
              to="/BuyerDashBoard"
              className={({ isActive }) => (isActive ? "buyer-active" : "")}
              end
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/BuyerProducts"
              className={({ isActive }) => (isActive ? "buyer-active" : "")}
            >
              Sản phẩm
            </NavLink>

            <NavLink
              to="/BuyerCart"
              className={({ isActive }) => (isActive ? "buyer-active" : "")}
            >
              Giỏ hàng
            </NavLink>

            <NavLink
              to="/BuyerWishlist"
              className={({ isActive }) => (isActive ? "buyer-active" : "")}
            >
              Wishlist
            </NavLink>

            <NavLink
              to="/BuyerSetting"
              className={({ isActive }) => (isActive ? "buyer-active" : "")}
            >
              Cài đặt
            </NavLink>
          </nav>

          {/* Action buttons */}
          <div className="buyer-header-actions">
            <Link to="/" className="btn btn-primary">
              Đăng xuất
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
