import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { checkBlankInput } from "../../Utils/checkBlankInput";
import axios from "axios";

export function ForgotPasswordPage() {
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const handleInput = async (event) => {
    event.preventDefault();
    const emailData = emailRef.current.value;

    console.log(emailData);

    if (checkBlankInput([emailData])) {
      alert("Please fill in all information"); // Check input trong thi bat nhap lai
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:6868/api/forgotpassword",
        {
          email: emailData,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data.success) {
        await navigate("/SendOtp", { state: { email: emailData } });
      } else {
        alert("Invalid account with email");
      }
    } catch (err) {
      if (err.response.status === 404) {
        alert("Email not exits in System");
      } else {
        alert(`Sever error with ${err}`);
      }
    }
  };
  return (
    <>
      <title>Forgot Pasword</title>
      <link rel="icon" type="image/svg+xml" href="/Enter-email-favicon.png" />
      <div className="background">
        <div className="login-container">
          <h1 className="title">Password Recovery</h1>
          <p className="subtitle">
            Please enter your Gmail adress so we can send you password recovery
            instructions
          </p>

          <form className="login-form" onSubmit={handleInput}>
            <label>Email Address</label>
            <input ref={emailRef} type="email" placeholder="Enter email" />

            <button type="submit" className="submit-button">
              Receive OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
