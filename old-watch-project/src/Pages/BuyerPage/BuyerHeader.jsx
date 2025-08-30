import "./BuyerHeader.css";

export function BuyerHeader() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">VintageTime</h1>
        <nav className="nav">
          <a href="/buyer/dashboard" className="nav-link">Trang chủ</a>
          <a href="/buyer/products" className="nav-link">Sản phẩm</a>
          <a href="/buyer/wishlist" className="nav-link">Wishlist</a>
          <a href="/buyer/cart" className="nav-link">Giỏ hàng</a>
          <a href="/buyer/checkout" className="nav-link">Thanh toán</a>
        </nav>
      </div>
    </header>
  );
}
