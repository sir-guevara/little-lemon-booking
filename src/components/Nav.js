import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
  return (
    <nav>
      <img src={littlelemon_logo} alt="Little Lemon Logo"></img>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
