import { Footer } from "../../Footer/Footer";
import { Header } from "../Header/Header";
import { useNavigate } from "react-router-dom";
import "../HomePage.css";
import { WatchCard } from "../WatchCard";
export function ExplorePage() {
  const navigate = useNavigate();
  function handleUploadButton() {
    alert("Vui lòng đăng nhập để bán đồng hồ");
    navigate("/LoginPage");
  }
  function handleSeeDetails() {
    alert("Vui lòng đăng nhập để xem thêm");
    navigate("/LoginPage");
  }

  return (
    <>
      <title>Explore</title>
      <link rel="icon" type="image/svg+xml" href="/explore-favicon.png" />
      <Header />
      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <div className="badge">
              <svg
                className="icon-sm"
                style={{ marginRight: 0.25 + "rem" }}
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
              <a href="/ExplorePage" className="btn btn-primary">
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
                <button className="btn btn-primary" style={{ width: "100%" }}>
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
            <h2 className="section-title">Khám phá bộ sưu tập</h2>
            <p className="section-subtitle">
              Khám phá những mẫu đồng hồ đã qua sử dụng đến từ các thương hiệu
              danh tiếng, được tuyển chọn và thẩm định nghiêm ngặt. Mỗi sản phẩm
              là sự kết hợp giữa giá trị sưu tầm, chất lượng kỹ thuật và độ tin
              cậy cao.
            </p>
          </div>
          <div className="cards-grid">
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />
          </div>
        </section>
        <div style={{ textAlign: "center", marginTop: 2 + "rem" }}>
          <button className="btn btn-outline" onChange={handleSeeDetails}>
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

        <section className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Sẵn sàng tham gia cộng đồng?</h2>
            <p className="cta-subtitle">
              Hàng nghìn người đã tin tưởng giao dịch đồng hồ cũ trên nền tảng
              của chúng tôi
            </p>
            <div className="cta-actions">
              <button className="btn btn-primary" onClick={handleUploadButton}>
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
              </button>
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
