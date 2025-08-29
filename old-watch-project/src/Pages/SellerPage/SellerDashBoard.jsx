import { Header } from "./Header";
import { PageHeader } from "./PageHeader";
import "./SellerDashBoard.css";
import { StatusGrid } from "./StatusGrid";
import { TabContainer } from "./TabContainer";
import { Footer } from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
export function SellerDashBoard() {
  const [productDraffs, setProductDraffs] = useState([]);
  const loadProductDraff = async () => {
    const response = await axios.get("http://localhost:6868/api/watchDraff");
    setProductDraffs(response.data);
  };
  useEffect(() => {
    loadProductDraff();
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <PageHeader />

          <StatusGrid
            productDraffs={productDraffs}
            loadProductDraff={loadProductDraff}
          />

          <TabContainer />
        </div>
      </main>
      <Footer />
    </>
  );
}
