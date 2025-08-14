import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/LoginPage/RegisterPage';
import { ForgotPasswordPage } from './Pages/LoginPage/ForgotPasswordPage';
import { OtpPage } from './Pages/LoginPage/OtpPage';
import { CreateNewPasswordPage } from './Pages/LoginPage/CreatePasswordPage';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePages/HomePage';
import { ExplorePage } from './Pages/HomePages/ExplorePage/ExplorePage';
import { AppraiserHomePage } from './Pages/HomePages/AppraiserHomePage/AppraiserHomePage';
import { SellerDashBoard } from './Pages/SellerPage/SellerDashBoard';
import { AddProductPage } from './Pages/SellerPage/AddProductPage';
import { ProductManagePage } from './Pages/SellerPage/ProductManagePage';

function App() {


  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />

      <Route path="/LoginPage" element={<LoginPage />} />

      <Route path="/Register" element={<RegisterPage />} />

      <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />

      <Route path="/SendOtp" element={<OtpPage />} />

      <Route path="/CreateNewPassword" element={<CreateNewPasswordPage />} />

      <Route path="/ExplorePage" element={<ExplorePage />}/>

      <Route path='/AppraiserHomePage' element={<AppraiserHomePage />}/>

      <Route path='/SellerDashBoard' element={<SellerDashBoard />}/>

      <Route path='/AddProductPage' element={<AddProductPage />}/>

      <Route path='/ProductManagePage' element={<ProductManagePage />} />
    </Routes>
  );
}

export default App
