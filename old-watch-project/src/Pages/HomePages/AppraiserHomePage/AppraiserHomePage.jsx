import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { Link } from "react-router-dom";
import "./AppraiserHomePage.css";
export function AppraiserHomePage() {
  return (
    <>
      <title>Appraisal</title>
      <link rel="icon" type="image/svg+xml" href="./home-favicon.png" />
      <Header />

      <section className="pt-16 pb-20 hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "#2E2E2E" }}
            >
              Dành cho
              <span className="block mt-2" style={{ color: "#8f5924" }}>
                Chuyên Gia Thẩm Định
              </span>
            </h1>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: "#957350" }}
            >
              Tham gia đội ngũ chuyên gia thẩm định đồng hồ hàng đầu. Sử dụng
              chuyên môn của bạn để đánh giá tính xác thực, chất lượng và đưa ra
              định giá chính xác cho những chiếc đồng hồ cao cấp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="px-8 py-4 rounded-xl font-semibold text-lg text-white hover:opacity-90 transition-all transform hover-scale shadow-lg hover-shadow flex items-center space-x-2"
                style={{ backgroundColor: "#8f5924" }}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Link to={"/Register"}>
                  <span>Đăng ký thẩm định viên</span>
                </Link>

                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <Link to={"/LoginPage"}>
                <button
                  className="border-2 px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-80 transition-colors"
                  style={{ borderColor: " #BFA78A", color: " #8f5924" }}
                >
                  Đăng nhập tài khoản
                </button>
              </Link>
            </div>
            <div
              className="mt-12 flex justify-center items-center space-x-8 text-sm"
              style={{ color: "#BFA78A" }}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4"
                  style={{ color: "#4CAF50" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Chứng nhận chuyên gia</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4"
                  style={{ color: "#8f5924" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>Thu nhập hấp dẫn</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-4 w-4"
                  style={{ color: "#8f5924" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span>Thương hiệu uy tín</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#2E2E2E" }}
            >
              Tính Năng Dành Cho Chuyên Gia Thẩm Định
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#BFA78A" }}
            >
              Bộ công cụ chuyên nghiệp để thực hiện thẩm định chính xác và hiệu
              quả
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="p-8 rounded-2xl border shadow-sm hover-shadow transition-all hover-scale"
              style={{ backgroundColor: "#FDFBF8", borderColor: "#E7DFD5" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F6F1EA;" }}
              >
                <svg
                  className="h-7 w-7"
                  style={{ color: "#8f5924" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Đăng nhập / Đăng xuất
              </h3>
              <p className="mb-4" style={{ color: "#BFA78A;" }}>
                Truy cập an toàn vào hệ thống thẩm định chuyên nghiệp. Quản lý
                phiên làm việc và bảo mật thông tin chuyên gia một cách dễ dàng.
              </p>
              <button
                className="font-medium flex items-center space-x-2 hover:space-x-3 transition-all"
                style={{ color: "#8f5924" }}
              >
                <span>Đăng nhập ngay</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            <div
              className="p-8 rounded-2xl border shadow-sm hover-shadow transition-all hover-scale"
              style={{ backgroundColor: "#FDFBF8", borderColor: "#E7DFD5" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F6F1EA" }}
              >
                <svg
                  className="h-7 w-7"
                  style={{ color: "#8f5924" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Thẩm định tính xác thực
              </h3>
              <p className="mb-4" style={{ color: "#BFA78A" }}>
                Đánh giá tính xác thực và chất lượng của đồng hồ được niêm yết.
                Sử dụng công cụ chuyên nghiệp để phân tích chi tiết từng sản
                phẩm.
              </p>
              <button
                className="font-medium flex items-center space-x-2 hover:space-x-3 transition-all"
                style={{ color: "#8f5924" }}
              >
                <span>Bắt đầu thẩm định</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            <div
              className="p-8 rounded-2xl border shadow-sm hover-shadow transition-all hover-scale"
              style={{ backgroundColor: "#FDFBF8", borderColor: "#E7DFD5" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F6F1EA" }}
              >
                <svg
                  className="h-7 w-7"
                  style={{ color: " #8f5924" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Định giá thị trường
              </h3>
              <p className="mb-4" style={{ color: "#BFA78A" }}>
                Đưa ra gợi ý giá dựa trên thị trường sau khi thẩm định. Sử dụng
                dữ liệu thị trường và kinh nghiệm chuyên môn để định giá chính
                xác.
              </p>
              <button
                className="font-medium flex items-center space-x-2 hover:space-x-3 transition-all"
                style={{ color: "#8f5924" }}
              >
                <span>Tạo báo giá</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            <div
              className="p-8 rounded-2xl border shadow-sm hover-shadow transition-all hover-scale"
              style={{ backgroundColor: "#FDFBF8", BorderColor: "#E7DFD5" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F6F1EA" }}
              >
                <svg
                  className="h-7 w-7"
                  style={{ color: "#8f5924" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Phản hồi & Yêu cầu chỉnh sửa
              </h3>
              <p className="mb-4" style={{ color: "#BFA78A" }}>
                Gửi nhận xét, phản hồi hoặc yêu cầu chỉnh sửa tin đăng khi cần
                thiết. Hướng dẫn người bán cải thiện chất lượng thông tin sản
                phẩm.
              </p>
              <button
                className="font-medium flex items-center space-x-2 hover:space-x-3 transition-all"
                style={{ color: "#8f5924" }}
              >
                <span>Gửi phản hồi</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            <div
              className="p-8 rounded-2xl border shadow-sm hover-shadow transition-all hover-scale"
              style={{ backgroundColor: "#FDFBF8", borderColor: "#E7DFD5" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F6F1EA" }}
              >
                <svg
                  className="h-7 w-7"
                  style={{ color: "#8f5924" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Báo cáo thẩm định
              </h3>
              <p className="mb-4" style={{ color: "#BFA78A" }}>
                Tạo và cập nhật báo cáo thẩm định chi tiết cho từng sản phẩm.
                Lưu trữ và quản lý tất cả báo cáo một cách có hệ thống.
              </p>
              <button
                className="font-medium flex items-center space-x-2 hover:space-x-3 transition-all"
                style={{ color: "#8f5924" }}
              >
                <span>Tạo báo cáo</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            <div
              className="p-8 rounded-2xl border shadow-sm hover-shadow transition-all hover-scale"
              style={{ backgroundColor: "#FDFBF8", borderColor: "#E7DFD5" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "#F6F1EA" }}
              >
                <svg
                  className="h-7 w-7"
                  style={{ color: "#8f5924" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Giao tiếp với người bán
              </h3>
              <p className="mb-4" style={{ color: "#BFA78A" }}>
                Liên lạc trực tiếp với người bán để làm rõ thông tin qua nền
                tảng. Đảm bảo có đủ thông tin để thực hiện thẩm định chính xác.
              </p>
              <button
                className="font-medium flex items-center space-x-2 hover:space-x-3 transition-all"
                style={{ color: "#8f5924" }}
              >
                <span>Bắt đầu trò chuyện</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="py-20"
        style={{ backgroundColor: "#FDFBF8" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#2E2E2E" }}
            >
              Quy Trình Thẩm Định Chuyên Nghiệp
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#BFA78A" }}
            >
              Từ nhận yêu cầu đến hoàn thành báo cáo, quy trình được tối ưu hóa
              cho hiệu quả tối đa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold"
                style={{ backgroundColor: "#8f5924" }}
              >
                1
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Nhận yêu cầu thẩm định
              </h3>
              <p style={{ color: "#BFA78A" }}>
                Nhận thông báo về đồng hồ cần thẩm định và xem xét thông tin ban
                đầu
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold"
                style={{ backgroundColor: "#8f5924" }}
              >
                2
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Đánh giá chi tiết
              </h3>
              <p style={{ color: "#BFA78A" }}>
                Thực hiện thẩm định tính xác thực, chất lượng và tình trạng của
                đồng hồ
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold"
                style={{ backgroundColor: "#8f5924" }}
              >
                3
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Định giá thị trường
              </h3>
              <p style={{ color: "#BFA78A" }}>
                Đưa ra gợi ý giá dựa trên phân tích thị trường và tình trạng sản
                phẩm
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold"
                style={{ backgroundColor: "#8f5924" }}
              >
                4
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#2E2E2E" }}
              >
                Hoàn thành báo cáo
              </h3>
              <p style={{ color: "#BFA78A" }}>
                Tạo báo cáo thẩm định chi tiết và gửi kết quả cho người bán
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#8f5924" }}
              >
                200+
              </div>
              <div style={{ color: "#BFA78A" }}>Chuyên gia thẩm định</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#8f5924" }}
              >
                50K+
              </div>
              <div style={{ color: "#BFA78A" }}>Đồng hồ đã thẩm định</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#8f5924" }}
              >
                99.8%
              </div>
              <div style={{ color: "#BFA78A" }}>Độ chính xác thẩm định</div>
            </div>
            <div>
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: "#8f5924" }}
              >
                24h
              </div>
              <div style={{ color: "#BFA78A" }}>
                Thời gian phản hồi trung bình
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#FDFBF8" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-white font-semibold"
              style={{ backgroundColor: "#4CAF50" }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Chứng nhận chuyên gia</span>
            </div>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "#2E2E2E" }}
          >
            Đội Ngũ Chuyên Gia Được Chứng Nhận
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#BFA78A" }}
          >
            Tất cả chuyên gia thẩm định đều được đào tạo và chứng nhận bởi các
            tổ chức uy tín trong ngành đồng hồ
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Sẵn sàng tham gia cộng đồng?</h2>
          <p className="cta-subtitle">
            Hàng nghìn người đã tin tưởng giao dịch đồng hồ cũ trên nền tảng của
            chúng tôi
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary">
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
              Bắt đầu thẩm định
            </button>
            <a href="#" className="btn btn-outline">
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
