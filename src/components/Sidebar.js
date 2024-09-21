import React, { useState } from "react";
import "./Sidebar.css";
import { toast, Toaster } from "react-hot-toast";

const handleLinkClick = (e) => {
  e.preventDefault();
  toast((t) => (
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
          "0 0 0 1px rgba(14, 12, 12, 0.32), 0 2px 4px rgba(0, 0, 0, 0.374), 0 4px 8px rgba(0, 0, 0, 0.445) 0 8px 16px rgba(23, 23, 23, 0.322), 0 16px 32px rgba(14, 13, 13, 0.324)",
      }}
    >
      <p>These features are under maintainance.</p>
    </div>
  ));
};

const handleLogoClick = () => {
  window.location.href = "/";
};



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef();
  const toggleSidebar = () => {
    if (!isOpen) {
      ref.current.style.transform = "translateX(0)";
    } else {
      ref.current.style.transform = "translateX(-100%)";
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="hamburger" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="sidebar" ref={ref}>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="logo" onClick={handleLogoClick}>
          <img src="../images/logo.png" alt="Printify Logo" />
          <h3>VisualiReal</h3>
        </div>
        <ul className="menu">
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/store.png" alt="store" />
            <li>
              <a href="#">My new store</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/home.png" alt="store" />
            <li>
              <a href="#">Dashboard</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/stationary.png" alt="store" />
            <li>
              <a href="#">Catalog</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/price-tag.png" alt="store" />
            <li>
              <a href="#">My Products</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/delivery-truck.png" alt="store" />
            <li>
              <a href="#">Orders</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/dollar-sign.png" alt="store" />
            <li>
              <a href="#">Wallet</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/insight.png" alt="store" />
            <li>
              <a href="#">Insights</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/setting.png" alt="store" />
            <li>
              <a href="#">Store settings</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/heartplus.png" alt="store" />
            <li>
              <a href="#">Branding</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/tag.png" alt="store" />
            <li>
              <a href="#">Printify Premium</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/help.png" alt="store" />
            <li>
              <a href="#">Need help?</a>
            </li>
          </div>
          <div className="option" onClick={handleLinkClick}>
            <img src="../images/resource.png" alt="store" />
            <li>
              <a href="#">Resources</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
