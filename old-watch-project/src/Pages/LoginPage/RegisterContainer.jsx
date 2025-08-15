import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { checkBlankInput } from "../../Utils/checkBlankInput";
import axios from "axios";

export function RegisterContainer() {
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  //

  const handleSubmitButton = async (event) => {
    event.preventDefault();
    const userNameData = userNameRef.current.value;
    const emailData = emailRef.current.value;
    const passwordData = passwordRef.current.value;
    const confirmPasswordData = confirmPasswordRef.current.value;

    if (
      checkBlankInput([
        userNameData,
        emailData,
        passwordData,
        confirmPasswordData,
      ])
    ) {
      alert("Please fill in all information");
      return;
    }

    if (passwordData !== confirmPasswordData) {
      alert("Passwords do not match, please re-enter");
      return;
    }

    try {
      const response = await axios.post("/api/register", {
        user_id: String(crypto.randomUUID()),
        user_name: userNameData,
        user_password: passwordData,
        address: "",
        email: emailData,
        phone_number: "",
        role_name: "buyer",
      });

      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed! Please try again.");
    }

    //navigate("/");
  };
  return (
    <div className="login-container">
      <h1 className="title">Register an account</h1>
      <p className="subtitle">Fill in information</p>

      <div className="toggle-buttons">
        <Link to="/LoginPage" className="active">
          <button className="active">Sign In</button>
        </Link>
        <button className="inactive">Sign Up</button>
      </div>

      <form className="login-form" onSubmit={handleSubmitButton}>
        <label>User Name</label>
        <input
          ref={userNameRef}
          type="text"
          placeholder="Enter your user name"
        />

        <label>Email Address</label>
        <input ref={emailRef} type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
        />

        <label>Confirm Password</label>
        <input
          ref={confirmPasswordRef}
          type="password"
          placeholder="Enter password to confirm"
        />

        <div className="form-options">
          <Link to="/LoginPage">Already have an account? Log in now</Link>
        </div>

        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
