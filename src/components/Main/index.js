import React from "react";
import "./styles.css";
import Profile from "../../assets/profile.png";
import { useNavigate } from "react-router-dom";
const Main = () => {
  let login = JSON.parse(localStorage.getItem("login")) || {};
  const navigate = useNavigate()

  if (!login.name) {
    return (
      <div style={{textAlign:"center"}}>
        <h1>Please Login <span onClick={()=>navigate("/signin")} style={{color:"blue",cursor:"pointer"}}>Click Here</span></h1>
      </div>
    );
  }
  return (
    <div className="main-page-container">
      <header>Account Setting</header>
      <div className="profile-container">
        <div className="image">
          <img src={Profile} alt="profile" />
        </div>
        <div>
          <div>{login.name}</div>
          <div>{login.email}</div>
        </div>
      </div>
      <p>
        lorem ipsum dolor sit amet, consectetur adip incid id elit lorem ipsum
        dolor sit amet, consectetur adip incid id elit lorem ipsum dolor sit
        amet, consectetur adip incid id elit lorem ipsum dolor sit amet,
        consectetur adip incid id elit lorem ipsum dolor sit amet, consectetur
        adip incid id elit lorem ipsum dolor sit amet, consectetur adip incid id
        elit
        lorem ipsum dolor sit amet, consectetur adip incid id elit lorem ipsum
        dolor sit amet, consectetur adip incid id elit lorem ipsum dolor sit
        amet, consectetur adip incid id elit lorem ipsum dolor sit amet,
        consectetur adip incid id elit lorem ipsum dolor sit amet, consectetur
        adip incid id elit lorem ipsum dolor sit amet, consectetur adip incid id
        elit
      </p>
      <hr style={{border:"1px dotted black"}} />
    </div>
  );
};

export default Main;
