import { Link } from "react-router-dom";
import logo from "../../assets/signIn.svg";
import SigninCSS from "./Signin.module.css";
import { getSingIN, setSignOut } from "../../utils/LocalStorage";
import { useState } from "react";

function SignIn() {
  const [logout, setLogout] = useState(false);
  const value = getSingIN();

  const handleLogout = () => {
    setLogout();
    setSignOut();
  };

  return (
    <div className={SigninCSS.rel}>
      <Link
        to={value ? "" : "/signin"}
        className={SigninCSS.main}
        onClick={() => setLogout(!logout)}
      >
        <img src={logo} alt="sign in svg" />
        <div>{value ? value.name : "Sign In"}</div>
      </Link>
      {logout && value ? (
        <div className={SigninCSS.logout}>
          <div>{value.name}</div>
          <div onClick={handleLogout}>LogOut</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SignIn;
