import { LoginContainer } from "./LoginContainer";
import "./LoginPage.css";

export function LoginPage() {
  return (
    <>
      <title>Login</title>
      <link rel="icon" type="image/svg+xml" href="/Login-favicon.png" />
      <div  className="background">
        <LoginContainer />
      </div>
    </>
  );
}
