import { AppraiserHeader } from "../components/AppraiserHeader";
import { AppraiserFooter } from "../components/AppraiserFooter";

export function AppraiserRequestDetail() {
  return (
    <>
      <AppraiserHeader />
      <main className="main">
        <div className="container">
          <h1 className="page-title">Chi tiết yêu cầu thẩm định</h1>
          <div className="request-detail">
            <p><b>Mã yêu cầu:</b> REQ001</p>
            <p><b>Khách hàng:</b> Nguyễn Văn A</p>
            <p><b>Sản phẩm:</b> Rolex Submariner 1965</p>
            <p><b>Ngày gửi:</b> 01/09/2025</p>
          </div>
          <button className="btn btn-primary">Gửi báo cáo</button>
        </div>
      </main>
      <AppraiserFooter />
    </>
  );
}
