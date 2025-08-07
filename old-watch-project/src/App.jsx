import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/LoginPage/RegisterPage';
import { ForgotPasswordPage } from './Pages/LoginPage/ForgotPasswordPage';
import { OtpPage } from './Pages/LoginPage/OtpPage';
import { CreateNewPasswordPage } from './Pages/LoginPage/CreatePasswordPage';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePages/HomePage';

function App() {


  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />

      <Route path="/LoginPage" element={<LoginPage />} />

      <Route path="/Register" element={<RegisterPage />} />

      <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />

      <Route path="/SendOtp" element={<OtpPage />} />

      <Route path="/CreateNewPassword" element={<CreateNewPasswordPage />} />
    </Routes>
  );
}

export default App
