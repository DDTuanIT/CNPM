import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkBlankInput } from "../../Utils/checkBlankInput";

export function RegisterContainer() {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  //
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Data")) || {};
    if (fullnameRef.current)
      fullnameRef.current.value = savedData.fullnameData || "";
    if (emailRef.current) emailRef.current.value = savedData.emailData || "";
    if (passwordRef.current)
      passwordRef.current.value = savedData.passwordData || "";
    if (confirmPasswordRef.current)
      confirmPasswordRef.current.value = savedData.confirmPasswordData || "";
  }, []);
  const handleSubmitButton = (event) => {
    event.preventDefault();
    const fullnameData = fullnameRef.current.value;
    const emailData = emailRef.current.value;
    const passwordData = passwordRef.current.value;
    const confirmPasswordData = confirmPasswordRef.current.value;
    localStorage.setItem(
      "Data",
      JSON.stringify({
        fullnameData,
        emailData,
        passwordData,
        confirmPasswordData,
      })
    );
    if (
      checkBlankInput([
        fullnameData,
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

    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1 className="title">Register an account</h1>
      <p className="subtitle">Fill in information</p>

      <div className="toggle-buttons">
        <Link to="/" className="active">
          <button className="active">Sign In</button>
        </Link>
        <button className="inactive">Sign Up</button>
      </div>

      <form className="login-form" onSubmit={handleSubmitButton}>
        <label>Full Name</label>
        <input
          ref={fullnameRef}
          type="text"
          placeholder="Enter your full name"
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
          <Link to="/">Already have an account? Log in now</Link>
        </div>

        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
