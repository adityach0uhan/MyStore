import React, { useState } from "react";
import "./styles/NavBar.css";

const NavBar = ({ FilterItem }) => {
  const [isActive, isNotActive] = useState(false);

  function ShowMenu() {
    isNotActive(!isActive);
  }
  return (
    <>
      <nav>
        <span className="Brand-Container">MyStore</span>
        <button onClick={ShowMenu}>ClickMEnu</button>
        <ul className={isActive ? "navBarShow" : "navBarHide"}>
          <li onClick={() => FilterItem("All")}>All</li>
          <li onClick={() => FilterItem("smartphones")}>Mobiles</li>
          <li onClick={() => FilterItem("laptops")}>Laptops</li>
          <li onClick={() => FilterItem("fragrances")}>fragrances</li>
          <li onClick={() => FilterItem("groceries")}>groceries</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
