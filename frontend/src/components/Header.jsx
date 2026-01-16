import React from "react";
import "./Header.css";
import logo from "../assets/atul-logo.png";

function Header() {
  return (
    <header className="app-header">
      
      {/* LEFT SIDE */}
      <div className="header-left">
        
        <div className="logo">
          <img src={logo} alt="Atul resto Logo" />
          <span>🍽 Atul Restaurant & BAR </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">
        <span className="notification">🔔</span>
        <span className="user">ex-Atul</span>
      </div>
    </header>
  );
}

export default Header;
