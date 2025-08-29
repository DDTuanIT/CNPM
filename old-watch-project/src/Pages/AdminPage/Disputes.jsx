import { useEffect, useState } from "react";
import axios from "axios";
import "./Disputes.css";

export function Disputes() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("/api/admin/transactions")
      .then((res) => setTransactions(res.data))
      .catch(() => {
        // mock data
        setTransactions([
          {
            id: "TX001",
            product: "Rolex Submariner 1965",
            risk: "Rủi ro thấp",
            status: "Hoàn thành",
            price: "85.000.000 ₫",
            buyer: "Nguyễn Văn D",
            seller: "Trần Thị E",
            time: "15:30 20/01/2024",
          },
          {
            id: "TX002",
            product: "Omega Speedmaster",
            risk: "Rủi ro cao",
            status: "Tranh chấp",
            price: "45.000.000 ₫",
            buyer: "Lê Văn F",
            seller: "Phạm Thị G",
            time: "12:15 20/01/2024",
          },
          {
            id: "TX003",
            product: "Patek Philippe Calatrava",
            risk: "Rủi ro trung bình",
            status: "Đang xử lý",
            price: "320.000.000 ₫",
            buyer: "Hoàng Văn H",
            seller: "Vũ Thị I",
            time: "10:45 20/01/2024",
          },
        ]);
      });
  }, []);

  return (
    <main className="disputes-main">
      <div className="disputes-content">
        <h1 className="page-title">Giám sát giao dịch</h1>

        <div className="transactions-list">
          {transactions.map((tx) => (
            <div key={tx.id} className="transaction-card">
              <div className="tx-header">
                <h3>{tx.product}</h3>
                <div className="badges">
                  <span
                    className={`badge risk ${tx.risk.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {tx.risk}
                  </span>
                  <span
                    className={`badge status ${tx.status.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {tx.status}
                  </span>
                </div>
              </div>

              <div className="tx-body">
                <p>
                  Người mua: <b>{tx.buyer}</b>
                </p>
                <p>
                  Người bán: <b>{tx.seller}</b>
                </p>
                <p>{tx.time}</p>
              </div>

              <div className="tx-footer">
                <div className="price">{tx.price}</div>
                <div className="actions">
                  <button className="btn-outline">👁 Chi tiết</button>
                  {tx.status === "Tranh chấp" && (
                    <button className="btn-danger">⚠ Xử lý tranh chấp</button>
                  )}
                </div>
                <div className="tx-id">ID: {tx.id}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
