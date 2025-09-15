import { useEffect, useState } from "react";
import axios from "axios";
import "./AppraisalReport.css";

export function AppraisalReport({ productDraff }) {
  const [appraisalReports, setAppraisalReports] = useState(null);
  const loadData = async () => {
    const response = await axios.get(
      "http://localhost:6868/api/appraisalReport"
    );
    response;
    const watchCurrent = response.data.find(
      (appr) => (appr.watch_id).toUpperCase() === (productDraff.watch_id).toUpperCase()
    );

    setAppraisalReports(watchCurrent)
  };
  useEffect(() => {
    loadData();
    console.log(productDraff);
  }, []);
  return (
    <>
      {appraisalReports ? (
        <>
          <main>
            <div className="card-body">
              <div className="paper">
                <div className="paper-head">
                  <div className="title">Báo cáo thẩm định</div>
                  <div className="date">Ngày tạo: {appraisalReports.create_at}</div>
                </div>

                <div className="dls">
                  <div className="item">
                    <div className="label">Mã báo cáo</div>
                    <div className="value">
                      {appraisalReports.appraisal_report_id}
                    </div>
                  </div>

                  <div className="item">
                    <div className="label">Mã đồng hồ</div>
                    <div className="value">
                      {appraisalReports.watch_id}
                    </div>
                  </div>
                  <div className="item">
                    <div className="label">Tên đồng hồ</div>
                    <div className="value">{productDraff.name}</div>
                  </div>
                  <div className="item">
                    <div className="label">Mã chuyên gia</div>
                    <div className="value">
                      {appraisalReports.appraiser_id}
                    </div>
                  </div>
                  <div className="item">
                    <div className="label">Giá trị ước tính</div>
                    <div className="value gold">{appraisalReports.estimate_value.toLocaleString('vi-VN')} VNĐ</div>
                  </div>
                  <div className="item desc">
                    <div className="label">Mô tả</div>
                    <div className="value">
                      {appraisalReports.description}
                    </div>
                  </div>
                </div>
              </div>

              <div className="actions" style={{ marginTop: "16px" }}></div>
            </div>
          </main>
        </>
      ) : (
        <>
          <p style={{"margin-top": "30px"}}>Sản phẩm chưa được thẩm định</p>
        </>
      )}
    </>
  );
}
