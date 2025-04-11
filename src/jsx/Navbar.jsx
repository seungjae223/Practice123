import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="logo" className="logo" />
      <div className="menu">
        <a href="#">동아리소개</a>
        <a href="#">푸드트럭</a>
      </div>
    </div>
  );
};

export default Navbar;