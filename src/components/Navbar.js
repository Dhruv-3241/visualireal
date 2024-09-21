import React from "react";
import "./Navbar.css";
import { toast, Toaster } from "react-hot-toast";

const handleLogoClick = () => {
  window.location.href = "/";
};

const handleClick = (event) => {
  event.preventDefault();
  toast(() => (
    <div
      style={{
        width: "300px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "16px",
        gap: "50px",
        fontSize: "14px",
        fontWeight: "700",
        backgroundColor: "white",
        border: "1px solid rgba(0, 0, 0, 0.351)",
        boxShadow:
          "0 0 0 1px rgba(14, 12, 12, 0.32), 0 2px 4px rgba(0, 0, 0, 0.374), 0 4px 8px rgba(0, 0, 0, 0.445), 0 8px 16px rgba(23, 23, 23, 0.322), 0 16px 32px rgba(14, 13, 13, 0.324)",
      }}
    >
      <p>Feature not available now.</p>
    </div>
  ));
};


const Navbar = () => {
  return (
    <nav className="navbar">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="comp" onClick={handleLogoClick}>
        <img src="../images/logo.png" alt="VisualiReal Logo" className="logo" />
        <h2> VisualiReal</h2>
      </div>
      <div className="premium-banner">
        <p>Get up to 25% discount with VisualiReal Premium!</p>
        <p>
          <a href="#" onClick={handleClick}>
            Get it now
          </a>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
