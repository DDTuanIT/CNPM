import { LoginPage } from './Pages/LoginPage/LoginPage'
import { RegisterPage } from './Pages/LoginPage/RegisterPage';
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <Routes>
      <Route index path="/" element={<LoginPage />} />

      <Route path="/Register" element={<RegisterPage />} />


    </Routes>
  );
}

export default App
