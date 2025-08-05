
import { useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { checkBlankInput } from "../../Utils/checkBlankInput";

export function OtpPage() {
	const otpRef = useRef(null);
	const navigate = useNavigate();
	const confirmHandler = (event) => {
		event.preventDefault();
		const otpData = otpRef.current.value; // data otp

		if (checkBlankInput([otpData])) {
			alert("Please fill in all information"); // check input blank
			return;
		}
		navigate('/CreateNewPassword');
	}
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
