import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import dayjs from "dayjs";
export function Order({ orderItems, order }) {
  const { user } = useContext(UserContext);
  const [stateOrder, setStateOrder] = useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("stateOrder"));
    data ? setStateOrder(data) : console.log(data);
  }, []);
  const loadData = async () => {
    const response = await axios.get("http://localhost:6868/api/transactions");
    const transaction = response.data.find(
      (x) => x.watch_id === orderItems.watch.watch_id
    );
    return transaction;
  };
  const addHoldBalance = async (transaction) => {
    try {
      const response = await axios.patch("http://localhost:6868/api/Login", {
        user_name: user.user_name,
        hold_balance: transaction.escrow,
      });
      response;
    } catch (e) {
      alert(`ERROR: ${e}`);
    }
  };
  const handleStateOrder = async () => {
    const newState = !stateOrder;
    setStateOrder(newState);
    const transaction = await loadData();
    await addHoldBalance(transaction);
    localStorage.setItem("stateOrder", JSON.stringify(newState));
  };
  return (
    <div className="order-card">
      <div className="order-image">
        <img src={orderItems.watch.image} alt="Rolex" />
      </div>
      <div className="order-info">
        <h3 className="order-id">
          Mã đơn hàng: {order.order_id.toUpperCase()}
        </h3>
        <p className="order-product">Tên sản phẩm: {orderItems.watch.name}</p>
        <p className="order-customer">Khách hàng: Nguyễn Văn A</p>
        <p className="order-date">
          Ngày đặt hàng: {dayjs(order.order_time).format("DD/MM/YYYY")}
        </p>
      </div>
      <div className="order-price">
        <div className="price">
          {orderItems.watch.price.toLocaleString("vi-VN")} VNĐ
        </div>
        <span className="badge badge-warning">
          {" "}
          {!stateOrder ? "⏰ Chờ xử lý" : "🚚 Đang giao"}
        </span>
      </div>
      <div className="order-actions">
        <button className="btns btns-outline btn-sm" onClick={handleStateOrder}>
          {stateOrder ? "Hoàn tất đơn hàng" : "Xác nhận"}
        </button>
      </div>
    </div>
  );
}
