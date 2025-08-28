import { useEffect, useState } from "react";
import axios from "axios";
import "./Transactions.css";

export function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin/transactions")
      .then((res) => setTransactions(res.data))
      .catch(() => {
        // fallback mock data
        setTransactions([
          { id: 1, buyer: "Nguyễn Văn A", seller: "Trần Thị B", amount: "$2,000", status: "Completed" },
          { id: 2, buyer: "Lê Văn C", seller: "Nguyễn Văn D", amount: "$5,500", status: "Pending" },
          { id: 3, buyer: "Phạm Thị E", seller: "Lý Văn F", amount: "$1,200", status: "Disputed" },
        ]);
      });
  }, []);

  return (
    <main className="transactions-main">
      <div className="transactions-content">
        <h1 className="page-title">Danh sách giao dịch</h1>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Người mua</th>
              <th>Người bán</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.buyer}</td>
                <td>{t.seller}</td>
                <td>{t.amount}</td>
                <td>
                  <span className={`status ${t.status.toLowerCase()}`}>
                    {t.status}
                  </span>
                </td>
                <td>
                  <button className="btn-sm">Xem</button>
                  <button className="btn-sm btn-danger">Hủy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
