// Header.tsx

import React from "react";
import "../styles/Header.css";
import Logo from "/owl-svgrepo-com.svg"; // Replace with your actual SVG file

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <ul>
          <li>
            <a href="/">ראשי</a>
          </li>
          <li>
            <a href="/contactUs">צור קשר</a>
          </li>
          <li>
            <a href="/registerUnion">איחוד קופות</a>
          </li>
          <li>
            <a href="/healthInsurance">ביטוח בריאות</a>
          </li>
          <li>
            <a href="/retirementPlanning">תכנון פרישה</a>
          </li>
        </ul>
      </nav>
      <div className="navbar-logo">
        <span className="business-name">מאיר ביטוחים</span>
        <img src={Logo} alt="Logo" className="logo-icon" />
      </div>
    </header>
  );
};

export default Header;
