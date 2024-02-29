import logo from "../../assets/signIn.svg";
import SigninCSS from "./Signin.module.css";

function SignIn() {
  return (
    <div className={SigninCSS.main}>
      <img src={logo} alt="sign in svg" />
      <div>Sign In</div>
    </div>
  );
}

export default SignIn;
