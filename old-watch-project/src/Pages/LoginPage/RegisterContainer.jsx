import { Link } from "react-router-dom";
import { useRef,  } from "react";
import { useNavigate } from "react-router-dom";
import { checkBlankInput } from "../../Utils/checkBlankInput";
import axios from "axios";

export function RegisterContainer() {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();

  //

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
    function storeDataRegister() {
      const retrievedData = JSON.parse(localStorage.getItem("Data"));
      const postRegister = async () => {
        const response = await axios.post("/api/register", {
          id: crypto.randomUUID(),
          fullname: retrievedData.fullnameData,
          email: retrievedData.emailData,
          password: retrievedData.passwordData,
          role: "buyer",
        });
        console.log(response);

      };
      postRegister();
    }
    storeDataRegister();
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
          <Link to="/LoginPage">Already have an account? Log in now</Link>
        </div>

        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
