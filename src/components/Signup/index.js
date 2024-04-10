import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signupObj, setSignupObj] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: null,
  });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const handleInputChange = (e) => {
    setSignupObj({
      ...signupObj,
      [e.target.name]: e.target.value,
    });
    console.log(signupObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", signupObj);
    if (
      signupObj.name &&
      signupObj.phone &&
      signupObj.email &&
      signupObj.password &&
      signupObj.companyName &&
      signupObj.agency
    ) {
      setUsers([...users, signupObj]);
      alert("Account created successfully")
      console.log(users);
    } else {
      if (!signupObj.name) {
        alert("Please enter  Name");
      } else if (!signupObj.phone) {
        alert("Please enter Phone Number");
      } else if (!signupObj.email) {
        alert("Please enter Email");
      } else if (!signupObj.password) {
        alert("please enter Password");
      } else if (!signupObj.companyName) {
        alert("please enter Company Name");
      } else if (!signupObj.agency) {
        alert("please Select a value");
      }
    }
  };
  return (
    <div className="container">
      <div className="container-content">
        <h2>
          Create your <br /> PopX account
        </h2>
        <form className="signup-form">
          <div className="input-flex">
            <div className="input-container">
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                autoComplete="off"
                required
                className="text-input"
                onChange={handleInputChange}
                name="name"
              />
              <label htmlFor="name" className="label">
                Full Name<span>*</span>
              </label>
            </div>
            <div className="input-container">
              <input
                type="number"
                placeholder="Phone Number"
                id="number"
                autoComplete="off"
                required
                className="text-input"
                onChange={handleInputChange}
                name="phone"
              />
              <label htmlFor="number" className="label">
                Phone Number<span>*</span>
              </label>
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                autoComplete="off"
                required
                className="text-input"
                onChange={handleInputChange}
                name="email"
              />
              <label htmlFor="email" className="label">
                Email Address<span>*</span>
              </label>
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                id="pass"
                autoComplete="off"
                required
                className="text-input"
                onChange={handleInputChange}
                name="password"
              />
              <label htmlFor="pass" className="label">
                Password<span>*</span>
              </label>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter Company Name"
                id="company"
                autoComplete="off"
                required
                className="text-input"
                onChange={handleInputChange}
                name="companyName"
              />
              <label htmlFor="company" className="label">
                Company Name<span>*</span>
              </label>
            </div>
            <div className="agency">
              <label htmlFor="">
                Are you an Agency?<span>*</span>
              </label>
              <div className="radio">
                <div>
                  <input
                    type="radio"
                    name="agency"
                    id="yes"
                    value="true"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="agency"
                    id="no"
                    value="false"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="btn"
              style={{ backgroundColor: "#6C25FF", color: "#fff" }}
              onClick={handleSubmit}
            >
              Create Account
            </div>
            <div style={{ fontSize: "13px", marginTop: ".4rem" }}>
              Already Have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => navigate("/signin")}
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

export default Signup;
