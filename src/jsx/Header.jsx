import React from "react";
import "../css/Navbar.css";
import logo from "../img/likelion_logo.png"
const Header = () => {
  return (
    <div className="navbar">
      <img src="logo" alt="logo" className="logo" />
      <div className="menu">
        <a href="#">동아리 소개</a>
        <a href="#">푸드 트럭</a>
      </div>
    </div>
  );
};

export default Header;