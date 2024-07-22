// NavigationBar.tsx
import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import OwlIcon from "/owl-svgrepo-com.svg"; // Adjust the path as necessary
import "../styles/Header.css"; // Import your CSS for styling

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <button className="search-button">Search</button>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
          <Link to="/contactUs" className="nav-link">
            <span>צור קשר</span>{" "}
          </Link>
        </div>
        <div className="navbar-right">
          <img src={OwlIcon} alt="" className="logo-icon" />
          <Link to="/" className="logo-link">
            <span className="logo-text">מאיר ביטוחים</span>{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
