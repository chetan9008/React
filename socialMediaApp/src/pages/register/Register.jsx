import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form action="" className="loginBox">
            <input type="text" className="loginInput" placeholder="Username" />
            <input type="email" placeholder="email" className="loginInput" />
            <input type="text" className="loginInput" placeholder="password" />
            <input
              type="text"
              className="loginInput"
              placeholder="passwordAgain"
            />
            <button className="loginButton">Sign Up</button>
            <Link to="/login" className="loginRegisterButton">
              <button>Log in Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
