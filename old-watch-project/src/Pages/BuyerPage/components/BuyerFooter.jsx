import "../styles/BuyerFooter.css";

export function BuyerFooter() {
  return (
    <footer className="buyer-footer">
      <div className="container">
        <div className="buyer-footer-top">
          <div className="buyer-footer-logo">
            <img src="logo-web.png" alt="VintageTime" />
            <span>VintageTime</span>
          </div>
          <nav className="buyer-footer-nav">
            <a href="/BuyerDashBoard">Dashboard</a>
            <a href="/BuyerProducts">Sản phẩm</a>
            <a href="/BuyerCart">Giỏ hàng</a>
            <a href="/BuyerWishlist">Wishlist</a>
            <a href="/BuyerSetting">Cài đặt</a>
          </nav>
        </div>

        <div className="buyer-footer-bottom">
          <p>© {new Date().getFullYear()} VintageTime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
