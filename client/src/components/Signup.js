import React, { useState } from "react";
import "../assets/stylesheets/Signup-form.css";
import { NavLink, useHistory } from "react-router-dom";
import ImageDiv from "./common-elements/ImageDiv";
import regLogo from "../assets/images/code.jpg";

const Signup = () => {
  const history = useHistory();
  const [errorToggle, setErrorToggle] = useState(true);
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [cpasswordToggle, setCPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({});

  const [users, setUsers] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    //const name = event.target.name;
    // const value = event.target.value;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const passwordToggleHandler = () => {
    setPasswordToggle(!passwordToggle);
  };
  const cpasswordToggleHandler = () => {
    setCPasswordToggle(!cpasswordToggle);
  };

  const validation = () => {
    console.log("validation() called");
    // we can not make error as global cause it will return same errors if we make it local then every time the validation
    // --> method is called we are starting from very beginning!!
    const error = {};
    setErrors(error);
    const { name, email, phone, work, password, cpassword } = users;
    var strPhone = phone.toString();
    var minNumberofChars = 4;
    var maxNumberofChars = 10;
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/;
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneRegex = /^([6-9]([0-9]{9}))$/;
    if (email === "") {
      error.email = "invalid email: this field can not be empty";
      setErrors(error);
      return false;
    } else if (!email.toLowerCase().match(emailRegex)) {
      error.email = "invalid email address: please give a valid email address";
      setErrors(error);
      return false;
    } else if (name === "") {
      error.name = "invalid name: this field can not be empty";
      setErrors(error);
      return false;
    } else if (strPhone === "") {
      error.phone = "invalid phone: this field can not be empty";
      setErrors(error);
      return false;
    } else if (!strPhone.match(phoneRegex)) {
      error.phone = "invalid phone: must be 10 digits starting with 6-9";
      setErrors(error);
      return false;
    } else if (work === "") {
      error.work = "invalid work: this field can not be empty";
      setErrors(error);
      return false;
    } else if (work.length < 3) {
      error.work =
        "invalid work: must be greater than or equals to 3 characters";
      setErrors(error);
      return false;
    } else if (password === "") {
      error.password = "invalid password: this field can not be empty";
      setErrors(error);
      return false;
    } else if (
      password.length < minNumberofChars ||
      password.length > maxNumberofChars
    ) {
      error.password =
        "invalid password: length should be in between 4 and 10 characters";
      setErrors(error);
      return false;
    } else if (!regularExpression.test(password)) {
      error.password =
        "password should contain atleast one number and one special character";
      setErrors(error);
      return false;
    } else if (password !== cpassword) {
      error.cpassword = "Passwords doesn't match";
      setErrors(error);
      return false;
    } else {
      setErrorToggle(true);
      return true;
    }
  };
  const PostData = async (event) => {
    event.preventDefault();
    //console.log("inside of PostData");
    if (!validation()) {
      //here we are setting the toggle as false that means error window will be visible
      setErrorToggle(false);
      console.log(errors);
      console.log(errorToggle);

      //if validation error is there then we will breakout of the function
      return;
    } else {
      // object destructuring :
      const { name, email, phone, work, password, cpassword } = users;

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, work, password, cpassword }),
        // actually -->body: JSON.stringify({name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword})
      });

      const data = await res.json();
      //console.log(data);
      if (res.status === 422 || !data) {
        // window.alert("Invalid Registration");
        console.log("invalid registration: " + data);
        // if we get error from server the error message will be saved in data as an object :{error:"the message"}
        console.log(data.error);
        const emailError = {};
        emailError.emailAlreadyExist = data.error;
        setErrors(emailError);
        //this means we are getting error that is why showing the error message by turning the toggle as true
        setErrorToggle(false);
        console.log(errors);
      } else {
        window.alert("Registration successful");
        console.log("registration success: " + data);
        history.push("/login");
      }
    }
  };

  return (
    <>
      <div
        class={errorToggle ? "errorDisplay" : "alert alert-danger text-center"}
        role="alert"
      >
        <p style={{ color: "red" }}> {errors.name}</p>
        <p style={{ color: "red" }}> {errors.email}</p>
        <p style={{ color: "red" }}> {errors.phone}</p>
        <p style={{ color: "red" }}> {errors.work}</p>
        <p style={{ color: "red" }}> {errors.password}</p>
        <p style={{ color: "red" }}> {errors.cpassword}</p>
        <p style={{ color: "red" }}> {errors.emailAlreadyExist}</p>
      </div>

      <span className="ms-2" />
      <section className="section-container">
        <ImageDiv img={regLogo} />
        <div className="contentBx signup-content">
          <div className="formBx signup-form">
            <span className="ms-2" />
            <h2 className="form-title">Sign up</h2>

            <form
              className="register-form registerForm mt-2"
              id="register-form"
              method="POST"
            >
              <div className="form-group input-group createGap">
                <i className="zmdi zmdi-account field-icon"></i>
                <span className="createGap"></span>
                <input
                  className="marginal-input"
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="   Your Name"
                  value={users.name}
                  onChange={inputHandler}
                />
              </div>

              <div className="form-group input-group createGap">
                <i className="zmdi zmdi-email field-icon"></i>
                <span className="createGap"></span>
                <input
                  className="marginal-input"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="   Your Email Id"
                  value={users.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group input-group createGap">
                <i className="zmdi zmdi-smartphone field-icon"></i>
                <span className="createGap"></span>
                <input
                  className="marginal-input"
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="    Your Phone Number"
                  value={users.phone}
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group input-group createGap">
                <i className="zmdi zmdi-accounts-list field-icon"></i>
                <span className="createGap"></span>
                <input
                  className="marginal-input"
                  type="text"
                  name="work"
                  id="work"
                  autoComplete="off"
                  placeholder="   Your Proffession"
                  value={users.work}
                  onChange={inputHandler}
                />
              </div>
              <div className="form-group input-group createGap">
                <i className="zmdi zmdi-lock field-icon"></i>
                <span className="createGap"></span>
                <input
                  className="marginal-input"
                  type={!passwordToggle ? "password" : "text"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="   Give Your Password"
                  value={users.password}
                  onChange={inputHandler}
                />
                <i
                  className={
                    !passwordToggle
                      ? "zmdi zmdi-eye-off password-icon"
                      : "zmdi zmdi-eye password-icon"
                  }
                  onClick={passwordToggleHandler}
                ></i>
              </div>
              <div className="form-group input-group createGap">
                <i className="zmdi zmdi-assignment-o field-icon"></i>
                <span className="createGap"></span>
                <input
                  className="marginal-input"
                  type={!cpasswordToggle ? "password" : "text"}
                  name="cpassword"
                  id="cpassword"
                  autoComplete="off"
                  placeholder="   Confirm Your Password"
                  value={users.cpassword}
                  onChange={inputHandler}
                />
                <i
                  onClick={cpasswordToggleHandler}
                  className={
                    !cpasswordToggle
                      ? "zmdi zmdi-eye-off password-icon"
                      : "zmdi zmdi-eye password-icon"
                  }
                ></i>
              </div>
              <span className="ms-5" />

              <div className="form-group form-button register-btn-container">
                <input
                  type="submit"
                  value="Register"
                  name="signup"
                  id="signup"
                  className="btn btn-outline-primary register-btn"
                  onClick={PostData}
                />
              </div>
              <span className="ms-7" />
              <div className="signup-link-container createGap">
                <NavLink exact className="Sign-up-link createGap" to="/login">
                  have an account already?
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
