import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../Header";
import { Footer } from "../../Footer/Footer";
import axios from 'axios'
import { OrdersGrid } from "./OrdersGrid";
export function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [watchs, setWatchs] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:6868/api/orders");
    setOrders(response.data);
  }
  const loadWatchData = async () => {
    const response = await axios.get("http://localhost:6868/api/watch");
    setWatchs(response.data);
  }
  useEffect(()=>{
    loadData();
    loadWatchData();
  },[]);

  return (
    <>
      <Header />
      <div id="orders-page">
        <div className="container">
          <div className="page-header">
            <div>
              <Link to="/SellerDashBoard">
                <button className="btns btns-outline back-button">
                  ← Quay lại Dashboard
                </button>
              </Link>
 
              <h1 className="page-title">Đơn hàng</h1>
              <p className="page-subtitle">Quản lý đơn hàng của bạn</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">{orders.length}</div>
                <div className="stat-title">Tổng đơn hàng</div>
              </div>
            </div>
            {/* <div className="stat-card orange">
              <div className="stat-content">
                <div className="stat-number">5</div>
                <div className="stat-title">Chờ xử lý</div>
              </div>
            </div>
            <div className="stat-card blue">
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-title">Đang giao</div>
              </div>
            </div>
            <div className="stat-card green">
              <div className="stat-content">
                <div className="stat-number">20</div>
                <div className="stat-title">Hoàn thành</div>
              </div>
            </div> */}
          </div>

          <OrdersGrid orders={orders} watchs={watchs} loadData={loadData}/>
        </div>
      </div>
      <Footer />
    </>
  );
}
