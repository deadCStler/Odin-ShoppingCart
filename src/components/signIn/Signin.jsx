import { Link } from "react-router-dom";
import logo from "../../assets/signIn.svg";
import SigninCSS from "./Signin.module.css";
import { useEffect, useState } from "react";
import { getSingIN } from "../../utils/LocalStorage";

function SignIn() {
  // const [isSign, setIsSign] = useState(false);

  // useEffect(() => {
  //   if (getSingIN) {
  //     setIsSign(true);
  //   }
  // }, []);

  return (
    <Link to={getSingIN ? "" : "/signin"} className={SigninCSS.main}>
      <img src={logo} alt="sign in svg" />
      <div>Sign In</div>
    </Link>
  );
}

export default SignIn;
