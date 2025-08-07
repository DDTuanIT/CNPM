import { Footer } from "./Footer";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import './HomePage.css'
import { WatchesGrid } from "./WatchesGrid";
export function HomePage() {
  return (
    <>
			<Header />
      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <div className="badge">
              <svg
                className="icon-sm"
                style={{marginRight: 0.25+"rem"}}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
              Nền tảng đồng hồ cũ hàng đầu
            </div>
            <h1>
              Thế giới <span className="text-luxury">đồng hồ cũ</span> <br />
              đẳng cấp và tin cậy
            </h1>
            <p>
              Nền tảng giao dịch đồng hồ cũ chuyên nghiệp với hệ thống thẩm định
              minh bạch, đảm bảo tính xác thực và giá trị công bằng cho mọi giao
              dịch.
            </p>
            <div className="hero-actions">
              <a href="/LoginPage" className="btn btn-primary">
                Khám phá ngay
                <svg
                  className="icon-sm"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#" className="btn btn-outline">
                Tìm hiểu thẩm định
              </a>
            </div>
          </div>
        </section>

        <section className="search-section">
          <div className="search-card">
            <h2 className="search-title">Tìm kiếm đồng hồ</h2>
            <div className="search-grid">
              <div className="form-group">
                <label>Thương hiệu</label>
                <select>
                  <option>Tất cả</option>
                  <option>Rolex</option>
                  <option>Omega</option>
                  <option>Patek Philippe</option>
                  <option>Cartier</option>
                </select>
              </div>
              <div className="form-group">
                <label>Khoảng giá</label>
                <select>
                  <option>Chọn giá</option>
                  <option>Dưới $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>Trên $15,000</option>
                </select>
              </div>
              <div className="form-group">
                <label>Năm sản xuất</label>
                <select>
                  <option>Chọn năm</option>
                  <option>2010-2019</option>
                  <option>2000-2009</option>
                  <option>1990-1999</option>
                  <option>Trước 1990</option>
                </select>
              </div>
              <div className="form-group">
                <label>&nbsp;</label>
                <button className="btn btn-primary" style={{width: "100%"}}>
                  <svg
                    className="icon-sm"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2 className="section-title">Dành cho mọi đối tượng</h2>
            <p className="section-subtitle">
              Nền tảng được thiết kế để phục vụ người bán, người mua và chuyên
              gia thẩm định
            </p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon" style={{color: "var(--primary)"}}>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="m22 21-2-2" />
                </svg>
              </div>
              <h3>Người bán</h3>
              <p>
                Đăng bán đồng hồ cũ của bạn với hệ thống thẩm định chuyên nghiệp
              </p>
              <ul className="features-list">
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Đăng tin miễn phí
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thẩm định chuyên gia
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thanh toán an toàn
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hỗ trợ 24/7
                </li>
              </ul>
              <button className="btn btn-outline" style={{width: "100%"}}>
                Tìm hiểu thêm
              </button>
            </div>

            <div className="card">
              <div className="card-icon" style={{color: "var(--success)"}}>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Người mua</h3>
              <p>
                Khám phá và mua những chiếc đồng hồ cũ được thẩm định chất lượng
              </p>
              <ul className="features-list">
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tìm kiếm thông minh
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Báo cáo thẩm định
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Bảo vệ người mua
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Đánh giá minh bạch
                </li>
              </ul>
              <button className="btn btn-outline" style={{width: "100%"}}>
                Tìm hiểu thêm
              </button>
            </div>

            <div className="card">
              <div className="card-icon" style={{color: "var(--luxury)"}}>
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m9 12 2 2 4-4" />
                  <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.549-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                </svg>
              </div>
              <h3>Chuyên gia thẩm định</h3>
              <p>Cung cấp dịch vụ thẩm định chuyên nghiệp cho cộng đồng</p>
              <ul className="features-list">
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thu nhập ổn định
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Công cụ thẩm định
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Xây dựng uy tín
                </li>
                <li>
                  <svg
                    className="checkmark icon-sm"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mạng lưới chuyên gia
                </li>
              </ul>
              <button className="btn btn-outline" style={{width: "100%"}}>
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </section>

        <section className="watches-section">
          <div className="watches-header">
            <div>
              <h2 className="section-title">Đồng hồ nổi bật</h2>
              <p className="section-subtitle">
                Những chiếc đồng hồ cũ được thẩm định và đánh giá cao
              </p>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 0.5+"rem"}}>
              <button className="btn btn-outline">
                <svg
                  className="icon-sm"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
                </svg>
                Lọc
              </button>
            </div>
          </div>
          <WatchesGrid />
          <div style={{textAlign: "center", marginTop: 2+"rem"}}>
            <button className="btn btn-outline">
              Xem tất cả đồng hồ
              <svg
                className="icon-sm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Sẵn sàng tham gia cộng đồng?</h2>
            <p className="cta-subtitle">
              Hàng nghìn người đã tin tưởng giao dịch đồng hồ cũ trên nền tảng
              của chúng tôi
            </p>
            <div className="cta-actions">
              <Link to="/LoginPage" className="btn btn-primary">
                <svg
                  className="icon-sm"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                Đăng bán đồng hồ
              </Link>
              <a href="#" className="btn btn-outline">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
