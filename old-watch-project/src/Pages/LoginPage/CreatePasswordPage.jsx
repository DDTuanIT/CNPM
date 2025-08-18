import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { checkBlankInput } from "../../Utils/checkBlankInput";
import { useLocation } from "react-router-dom";
import axios from "axios";

export function CreateNewPasswordPage() {
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();
  const handleSubmitButton = async (event) => {
		event.preventDefault();
    const passwordData = passwordRef.current.value;
    const confirmPasswordData = confirmPasswordRef.current.value;

    if (checkBlankInput([passwordData, confirmPasswordData])) {
      alert("Please fill in all information");
      return;
    }
    if (passwordData !== confirmPasswordData) {
      alert("2 passwords do not match, please re-enter");
      return;
    }

    const response = await axios.post("/api/changepassword", {
      'email': email,
      'new_password': passwordData
    });
    console.log(response);
    await navigate("/LoginPage");
  };
  return (
    <>
      <div className="background">
        <div className="login-container">
          <h1 className="title">Create a new password</h1>

          <form className="login-form" onSubmit={handleSubmitButton}>
            <label>New Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Enter password"
            />

            <label>Confirm New Password</label>
            <input
              ref={confirmPasswordRef}
              type="password"
              placeholder="Enter password"
            />

            <button
              type="submit"
              className="submit-button"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
