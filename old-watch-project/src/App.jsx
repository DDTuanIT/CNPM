import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegisterPage } from "./Pages/LoginPage/RegisterPage";
import { ForgotPasswordPage } from "./Pages/LoginPage/ForgotPasswordPage";
import { OtpPage } from "./Pages/LoginPage/OtpPage";
import { CreateNewPasswordPage } from "./Pages/LoginPage/CreatePasswordPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePages/HomePage";
import { ExplorePage } from "./Pages/HomePages/ExplorePage/ExplorePage";
import { AppraiserHomePage } from "./Pages/HomePages/AppraiserHomePage/AppraiserHomePage";
import { SellerDashBoard } from "./Pages/SellerPage/SellerDashBoard";
import { AddProductPage } from "./Pages/SellerPage/AddProductPage";
import {ProductManagePage} from "./Pages/SellerPage/ProductManagePages/ProductManagePage"
import {OrderPage} from "./Pages/SellerPage/OrderPages/OrderPage"
import { SettingPage } from "./Pages/SellerPage/SettingPage";
import { UserProvider } from "./Pages/Context/UserContext";
import { AdminPage } from "./Pages/AdminPage/AdminPage";
import { EditProductPage } from "./Pages/SellerPage/ProductManagePages/EditProductPage";
import {AppraisalReport} from "./Pages/SellerPage/AppraisalReportPage/AppraisalReport";
import { BuyerDashBoard } from "./Pages/BuyerPage/pages/BuyerDashBoard";
import { BuyerProductsPage } from "./Pages/BuyerPage/pages/BuyerProductsPage";
import { BuyerWishlistPage } from "./Pages/BuyerPage/pages/BuyerWishlistPage";
import { BuyerCartPage } from "./Pages/BuyerPage/pages/BuyerCartPage";
import { BuyerCheckoutPage } from "./Pages/BuyerPage/pages/BuyerCheckoutPage";
import { BuyerSettingPage } from "./Pages/BuyerPage/pages/BuyerSettingPage";
import { BuyerOrdersPage } from "./Pages/BuyerPage/pages/BuyerOrdersPage";

import { AppraiserDashBoard } from "./Pages/AppraiserPage/pages/AppraiserDashBoard";
import { AppraiserRequestsPage } from "./Pages/AppraiserPage/pages/AppraiserRequestsPage";
import { AppraiserRequestDetail } from "./Pages/AppraiserPage/pages/AppraiserRequestDetail";
import { AppraiserReportsPage } from "./Pages/AppraiserPage/pages/AppraiserReportsPage";
import { AppraiserSettingPage } from "./Pages/AppraiserPage/pages/AppraiserSettingPage";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />

        <Route path="/SellerDashBoard" element={<SellerDashBoard />} />

        <Route path="/AddProductPage" element={<AddProductPage />} />

        <Route path="/ProductManagePage" element={<ProductManagePage />} />

        <Route path="/EditProductPage" element={<EditProductPage />}/>

        <Route path="/AppraisalReport" element={<AppraisalReport />}/>

        <Route path="/OrderPage" element={<OrderPage />} />

        <Route path="/SettingPage" element={<SettingPage />} />

        <Route index path="/" element={<HomePage />} />

        <Route path="/Register" element={<RegisterPage />} />

        <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />

        <Route path="/SendOtp" element={<OtpPage />} />

        <Route path="/CreateNewPassword" element={<CreateNewPasswordPage />} />

        <Route path="/ExplorePage" element={<ExplorePage />} />

        <Route path="/AppraiserHomePage" element={<AppraiserHomePage />} />
        
        <Route path="/AdminPage" element={<AdminPage />} />

        <Route path="/BuyerDashBoard" element={<BuyerDashBoard />} />

        <Route path="/BuyerProducts" element={<BuyerProductsPage />} />

        <Route path="/BuyerWishlist" element={<BuyerWishlistPage />} />

        <Route path="/BuyerCart" element={<BuyerCartPage />} />

        <Route path="/BuyerCheckout" element={<BuyerCheckoutPage />} />

        <Route path="/BuyerSetting" element={<BuyerSettingPage />} />

        <Route path="/BuyerOrders" element={<BuyerOrdersPage />} />
      
        <Route path="/AppraiserDashBoard" element={<AppraiserDashBoard />} />
        
        <Route path="/AppraiserRequests" element={<AppraiserRequestsPage />} />
        
        <Route path="/AppraiserRequestDetail" element={<AppraiserRequestDetail />} />
        
        <Route path="/AppraiserReports" element={<AppraiserReportsPage />} />
        
        <Route path="/AppraiserSetting" element={<AppraiserSettingPage />} />
        
      </Routes>
    </UserProvider>
  );
}

export default App;
