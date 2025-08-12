import { Footer } from "../../Footer/Footer";
import { Header } from "../Header/Header";
import { useNavigate, Link } from "react-router-dom";
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
              <Link to="/LoginPage" className="btn btn-primary">
                Đăng nhập
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
              </Link>
              <Link to="/AppraiserHomePage" className="btn btn-outline">
                Tìm hiểu thẩm định
              </Link>
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
              <Link to="/LoginPage" className="btn btn-outline">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
