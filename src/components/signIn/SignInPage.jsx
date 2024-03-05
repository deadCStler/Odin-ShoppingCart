import { useState } from "react";
import SigninCSS from "./Signin.module.css";
import logo from "../../assets/miniso-seeklogo.webp";
import { Link } from "react-router-dom";
import { setSignIN } from "../../utils/LocalStorage";

function SignInPage() {
  const [showPass, setShowPass] = useState("password");

  const showPassword = () => {
    showPass === "password" ? setShowPass("text") : setShowPass("password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.querySelector("#name").value;
    const email = e.target.querySelector("#email").value;
    const pass = e.target.querySelector("#pass").value;
    setSignIN({ name, email, pass });
  };

  return (
    <>
      <Link to="/" className={SigninCSS.header}>
        <img src={logo} alt="MiniBuy" className={SigninCSS.logo} />
        <h1>MINIBUY</h1>
      </Link>
      <div className={SigninCSS.container}>
        <div className={SigninCSS.dialog}>
          <h2>Sign in</h2>
          <form className={SigninCSS.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                required
                maxLength="13"
                placeholder="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                required
                placeholder="name@email.com"
              />
            </div>
            <div>
              <label htmlFor="pass">Password:</label>
              <input
                type={showPass}
                id="pass"
                required
                minLength="4"
                maxLength="10"
                placeholder="*******"
              />
            </div>
            <span className={SigninCSS.showPass}>
              <input type="checkbox" onClick={showPassword} />
              <span>Show Password</span>
            </span>
            <button type="submit" className={SigninCSS.button}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
