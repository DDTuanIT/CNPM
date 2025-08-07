



export function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-section">
                <div className="logo" style={{marginBottom: 1+"rem"}}>
                  <img className="logo-web" src="logo-web.png" alt="" />
                  <span className="logo-text">VintageTime</span>
                </div>
                <p style={{color: "var(--muted-foreground)", fontSize: 0.875+"rem"}}>
                  Nền tảng giao dịch đồng hồ cổ hàng đầu với hệ thống thẩm định
                  minh bạch và đáng tin cậy.
                </p>
              </div>
              <div className="footer-section">
                <h3>Dịch vụ</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Mua bán đồng hồ</a>
                  </li>
                  <li>
                    <a href="#">Thẩm định chuyên nghiệp</a>
                  </li>
                  <li>
                    <a href="#">Bảo hiểm giao dịch</a>
                  </li>
                  <li>
                    <a href="#">Tư vấn đầu tư</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Hỗ trợ</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Trung tâm trợ giúp</a>
                  </li>
                  <li>
                    <a href="#">Hướng dẫn giao dịch</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ hỗ trợ</a>
                  </li>
                  <li>
                    <a href="#">Báo cáo sự cố</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Về chúng tôi</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="#">Đội ngũ chuyên gia</a>
                  </li>
                  <li>
                    <a href="#">An toàn & Bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản sử dụng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              © 2024 VintageTime. Tất cả quyền được bảo lưu. | Nền tảng giao
              dịch đồng hồ cổ đáng tin cậy
            </div>
          </div>
        </div>
      </footer>
    );
}