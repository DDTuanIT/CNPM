import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { checkBlankInput } from "../../Utils/checkBlankInput";
import { useLocation } from "react-router-dom";
import axios from "axios";

export function OtpPage() {
  const otpRef = useRef(null);
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();
  const confirmHandler = async (event) => {
    event.preventDefault();

    const otpData = otpRef.current.value; // data otp

    if (checkBlankInput([otpData])) {
      alert("Please fill in all information"); // check input blank
      return;
    }
    try {
      const response = await axios.post("api/verifyotp", {
        email: email,
        otp: otpData,
      });
      if (response.data.success) {
        await navigate("/CreateNewPassword", { state: { email: email } });
      } else {
        alert("Incorrect OTP");
      }
    } catch (err) {
      alert(`Error with ${err}`);
    }
  };
  return (
    <>
      <title>Forgot Password</title>
      <link rel="icon" type="image/svg+xml" href="/send-favicon.png" />
      <div className="background">
        <div className="login-container">
          <h1 className="title">Password Recovery</h1>
          <p className="subtitle">Enter the OTP you just received</p>

          <form className="login-form" onSubmit={confirmHandler}>
            <input ref={otpRef} type="text" placeholder="" />

            <button type="submit" className="submit-button">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
