import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import "./Dashboard.css";

export function Dashboard() {
  const { user } = useContext(UserContext);
  const [stats, setStats] = useState({
    users: 0,
    transactions: 0,
    disputes: 0,
  });

  useEffect(() => {
    axios
      .get("/api/admin/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch(() => {
        // fallback mock data
        setStats({
          users: 123,
          transactions: 456,
          disputes: 7,
        });
      });
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <h2>Xin chào, {user?.name || "Admin"} 👋</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Tổng số người dùng</h3>
            <p>{stats.users}</p>
          </div>
          <div className="stat-card">
            <h3>Giao dịch</h3>
            <p>{stats.transactions}</p>
          </div>
          <div className="stat-card">
            <h3>Tranh chấp</h3>
            <p>{stats.disputes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
