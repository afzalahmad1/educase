import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const handleLoginInputChange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
    console.log(loginObj);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if(loginObj.email && loginObj.password){
        for (let val of users) {
            if (val.email === loginObj.email) {
              if (val.password === loginObj.password) {
                localStorage.setItem("login", JSON.stringify(val));
                navigate("/main");
                return;
              } else {
                alert("Wrong password");
                return;
              }
            }
          }
    }else{
        if(!loginObj.email){
            alert("Please enter email");
            return;
        }else{
            alert("Please enter password");
            return;
        }
    }
    alert("email not found please signup first");
  };
  return (
    <div className="container">
      <div className="container-content-login">
        <div className="welcome">
          <h3>Sign in to your PopX account</h3>
          <p>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>
        </div>
        <form className="login-form">
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter Email Address"
              id="email"
              autoComplete="off"
              required
              className="text-input"
              onChange={handleLoginInputChange}
              name="email"
            />
            <label htmlFor="email" className="label">
              Email Address
            </label>
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter Password"
              id="pass"
              autoComplete="off"
              required
              className="text-input"
              onChange={handleLoginInputChange}
              name="password"
            />
            <label htmlFor="pass" className="label">
              Password
            </label>
          </div>
          <div>
            <div className="login" onClick={handleLogin}>
              Login
            </div>
            <div style={{ fontSize: "13px", marginTop: ".4rem" }}>
              Don't have an Account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Click Here
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
