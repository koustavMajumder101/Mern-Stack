import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../assets/stylesheets/Signup-form.css";
import "../assets/stylesheets/login.css";
import ImageDiv from "./common-elements/ImageDiv";
import LoginLogo from "../assets/images/login.gif";

const Login = () => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [errorToggle, setErrorToggle] = useState(true);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const passwordToggleHandler = () => {
    setPasswordToggle(!passwordToggle);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    const { email, password } = userLogin;
    //console.log("email:" + email + "  password:" + password);
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = res.json();
    //console.log(data);
    if (res.status === 400 || !data) {
      //window.alert("Bad Credentials");
      //setErrorToggle(!errorToggle);
      console.log("Bad Credentials");
      setErrorToggle(false);
    } else {
      console.log("Login success!!");
      history.push("/");
    }
  };

  return (
    <>
      <span className="ms-5" />
      <section className="section-container">
        <ImageDiv img={LoginLogo} />
        <div className="contentBx signup-content">
          <div className="formBx signup-form">
            <h2 className="form-title">Log in</h2>
            <form
              className="register-form registerForm cntr"
              id="register-form"
              method="POST"
            >
              <div
                class={errorToggle ? "errorDisplay" : "alert alert-danger"}
                role="alert"
              >
                Bad Credentials
              </div>
              <span className="ms-5" />
              <div className="form-group input-group createGap cntr">
                <input
                  className="log-in-input"
                  type="email"
                  name="email"
                  value={userLogin.email}
                  id="name"
                  autoComplete="off"
                  placeholder="Your Email Address"
                  onChange={onChangeHandler}
                />
              </div>

              <div className="form-group input-group createGap cntr">
                <input
                  className="log-in-input"
                  type={!passwordToggle ? "password" : "text"}
                  name="password"
                  value={userLogin.password}
                  id="password"
                  autoComplete="off"
                  placeholder="Give Your Password"
                  onChange={onChangeHandler}
                />
              </div>
              <i
                className={
                  !passwordToggle
                    ? "zmdi zmdi-eye-off text-center login-eye"
                    : "zmdi zmdi-eye text-center login-eye"
                }
                onClick={passwordToggleHandler}
              >
                {passwordToggle ? " Hide Password" : " Show Password"}
              </i>
              <span className="ms-5" />
              <div className="signup-link-container createGap">
                <NavLink exact className="log-in-link createGap" to="/signup">
                  don't have an account ?
                </NavLink>
              </div>
              <span className="ms-2" />
              <div className="form-group form-button register-btn-container">
                <input
                  type="submit"
                  value="Log in"
                  name="signin"
                  id="signin"
                  className="btn btn-outline-dark login-btn"
                  onClick={loginHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
