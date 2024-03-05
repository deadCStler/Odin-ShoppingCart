import { Link } from "react-router-dom";
import logo from "../../assets/signIn.svg";
import SigninCSS from "./Signin.module.css";

function SignIn() {
  return (
    <Link to="/signin" className={SigninCSS.main}>
      <img src={logo} alt="sign in svg" />
      <div>Sign In</div>
    </Link>
  );
}

export default SignIn;
