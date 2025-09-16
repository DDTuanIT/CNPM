import "../styles/SupportFooter.css";

export function SupportFooter() {
  return (
    <footer className="support-footer">
      <div className="footer-grid">
        <div>
          <h4>Liên hệ</h4>
          <p>Hotline: +84 123 456 789</p>
          <p>Email: support@vintagetimepiece.vn</p>
        </div>
        <div>
          <h4>Liên kết nhanh</h4>
          <a href="/SupportDashBoard">Dashboard</a>
          <a href="/SupportTicketsPage">Quản lý yêu cầu</a>
          <a href="/SupportTicketsPage">Quản lý khiếu nại</a>
        </div>
        <div>
          <h4>Trạng thái CSKH</h4>
          <p>🟢 Online</p>
        </div>
        <div className="copyright">
          © 2025 VintageTime. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
