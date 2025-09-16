import { useState } from "react";
import { SupportHeader } from "../components/SupportHeader";
import { SupportFooter } from "../components/SupportFooter";
import "../styles/SupportDashBoard.css";

export function SupportDashBoard() {
  // State lưu dữ liệu thống kê
  const [stats, setStats] = useState({
    requests: 10,
    complaints: 10,
    successRate: 29,
  });

  // State lưu danh sách yêu cầu & khiếu nại
  const [tickets, setTickets] = useState([
    { id: "VT-1000", name: "Quỳnh Bùi", date: "2025-02-14" },
    { id: "VT-1002", name: "Bình Trần", date: "2025-02-06" },
  ]);

  const [complaints, setComplaints] = useState([
    { id: "VT-2001", name: "An Phạm", date: "2025-02-18" },
    { id: "VT-2004", name: "Lan Phan", date: "2025-02-22" },
  ]);

  // Hàm làm mới dữ liệu
  const refreshData = () => {
    setStats({
      requests: Math.floor(Math.random() * 20) + 1,
      complaints: Math.floor(Math.random() * 20) + 1,
      successRate: Math.floor(Math.random() * 100),
    });

    setTickets([
      { id: "VT-" + (1000 + Math.floor(Math.random() * 100)), name: "Khách A", date: "2025-02-14" },
      { id: "VT-" + (1000 + Math.floor(Math.random() * 100)), name: "Khách B", date: "2025-02-15" },
    ]);

    setComplaints([
      { id: "VT-" + (2000 + Math.floor(Math.random() * 100)), name: "Khách C", date: "2025-02-18" },
      { id: "VT-" + (2000 + Math.floor(Math.random() * 100)), name: "Khách D", date: "2025-02-19" },
    ]);
  };

  return (
    <div className="support-layout">
      <SupportHeader />
      <div className="main-container">
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Tổng quan</h1>
            <div className="actions">
              <button className="btn-secondary" onClick={refreshData}>
                ⟳ Làm mới dữ liệu
              </button>
              <button
                className="btn-primary"
                onClick={() => (window.location.href = "/SupportTickets/new")}
              >
                ➕ Tạo yêu cầu mới
              </button>
            </div>
          </div>

          {/* Thẻ thống kê */}
          <div className="stats-cards">
            <div className="stat-card">
              <h3>Yêu cầu hỗ trợ hôm nay</h3>
              <p className="stat-value">{stats.requests}</p>
            </div>
            <div className="stat-card">
              <h3>Khiếu nại đang xử lý</h3>
              <p className="stat-value">{stats.complaints}</p>
            </div>
            <div className="stat-card">
              <h3>Tỉ lệ giải quyết thành công</h3>
              <p className="stat-value">{stats.successRate}%</p>
            </div>
          </div>

          {/* Charts */}
          <div className="charts">
            <div className="chart-card">
              <h3>Phân bố trạng thái yêu cầu</h3>
              <div className="chart-placeholder">[Pie Chart]</div>
            </div>
            <div className="chart-card">
              <h3>Top khách hàng theo số lượng yêu cầu</h3>
              <div className="chart-placeholder">[Bar Chart]</div>
            </div>
          </div>

          {/* Tables */}
          <div className="tables">
            <div className="table-card">
              <h3>5 yêu cầu mới nhất</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Khách hàng</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t) => (
                    <tr key={t.id}>
                      <td>{t.id}</td>
                      <td>{t.name}</td>
                      <td>{t.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="table-card">
              <h3>5 khiếu nại mới nhất</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Khách hàng</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.name}</td>
                      <td>{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <SupportFooter />
    </div>
  );
}
