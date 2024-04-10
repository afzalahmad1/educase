import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate()
  return (
    <div className="container">
      <div className="container-content">
        <div className="welcome">
          <h3>Welcome to PopX</h3>
          <p>
            lorem ipsum dolor sit amet. <br /> consectrtur adipiscing elt.
          </p>
        </div>
        <div className="btn-container">
          <div className="btn" style={{color: "#fff", backgroundColor:"#6C25FF"}} onClick={()=>navigate("/signup")}>Create Account</div>
          <div className="btn" style={{backgroundColor:"#ddd"}} onClick={()=>navigate("/signin")}>Already Registered? Login</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
