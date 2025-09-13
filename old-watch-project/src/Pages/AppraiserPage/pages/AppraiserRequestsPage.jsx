import { AppraiserHeader } from "../components/AppraiserHeader";
import { AppraiserFooter } from "../components/AppraiserFooter";
import "../styles/AppraiserRequestsPage.css";

export function AppraiserRequestsPage() {
  return (
    <>
      <AppraiserHeader />
      <main className="main">
        <div className="container">
          <h1>Requests</h1>
          <p>Danh sách yêu cầu thẩm định</p>

          <div className="request-card">
            <h3>Yêu cầu #R001</h3>
            <p>Rolex Submariner - Khách: Nguyễn Văn A</p>
            <button>🔍 Xem chi tiết</button>
          </div>
        </div>
      </main>
      <AppraiserFooter />
    </>
  );
}
