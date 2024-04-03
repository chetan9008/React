import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <Link to="/">
            <h3 className="loginLogo">Social Media</h3>
          </Link>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form action="" className="loginBox">
            <input type="email" placeholder="email" className="loginInput" />
            <input
              type="password"
              placeholder="password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <Link to="/register" className="loginRegisterLink">
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
