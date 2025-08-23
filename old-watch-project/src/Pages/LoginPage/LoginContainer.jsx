import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

export function LoginContainer() {
  const [statePassword, setStatePassword] = useState(false);
  const userRef = useRef(null); 
  const passwordRef = useRef(null); 
  const navigate = useNavigate();
  //
  const {user, setUser} = useContext(UserContext);
  const handleCheckboxChange = () => {
    statePassword ? setStatePassword(false) : setStatePassword(true);
  };

  //
  const handleSubmitbutton = async (event) => {
    event.preventDefault();
    const userData = userRef.current.value;
    const passwordData = passwordRef.current.value;

    if (!userData || !passwordData) {
      alert("Please fill in all information");
      return;
    }
 
    try {
      const response = await axios.post(
        "http://localhost:6868/api/login",
        {
          user_name: userData,
          user_password: passwordData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUser(response.data);
      alert("Login sucessfull");
      // Chỗ chuyển trang dashboard tùy vào role
      if (user.role_name === "buyer") {
        navigate('/SellerDashBoard');
      }
    } catch (err) {
      if (err.response.status === 404) {
        alert("Invalid account");
      }
      else if (err.response.status === 401){
         alert("Incorrect Password");
      }
      else
        alert("Error System");
     
    }
   

  };
  //

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
        <label>User Name</label>
        <input ref={userRef} type="text" placeholder="Enter your User Name" />

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
