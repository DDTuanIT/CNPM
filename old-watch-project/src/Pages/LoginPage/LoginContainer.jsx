import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

export function LoginContainer() {
  const [statePassword, setStatePassword] = useState(false);
  const emailRef = useRef(null); // 
  const passwordRef = useRef(null); //
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    statePassword ? setStatePassword(false) : setStatePassword(true);
  };

  // 
  const handleSubmitbutton = (event) => {
    event.preventDefault();
    const emailData = emailRef.current.value; 
    const passwordData = emailRef.current.value; 

    if (!emailData || !passwordData) {
      alert("Please fill in all information"); 
      return;
    }

    getLogin();
    console.log(dataLogin);
    navigate("/");
  };
  //

  const [dataLogin, setDataLogin] = useState([]);
  const getLogin = async () => {
    const response = await axios.get("/api/login");
    setDataLogin(response.target.value);
  };

  return (
    <div className="login-container">
      <h1 className="title">Welcome</h1>
      <p className="subtitle">Sign in to your account or create a new one</p>

      <div className="toggle-buttons">
        <button className="toggle-buttons-active">Sign In</button>
        <Link to="/Register">
          <button className="toggle-buttons-inactive">Sign Up</button>
        </Link>
      </div>

      <form className="login-form" onSubmit={handleSubmitbutton}>
        <label>Email Address</label>
        <input ref={emailRef} type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input
          ref={passwordRef}
          type={statePassword ? "text" : "password"}
          placeholder="Enter your password"
        />

        <div className="form-options">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              checked={statePassword}
              onChange={handleCheckboxChange}
            />
            <div className="show-hide-text">Show Password</div>
          </label>
          <Link to="/ForgotPassword">Forgot password?</Link>
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </div>
  );
}
