import React from "react";
import "./Banner.css";
import { toast, Toaster } from "react-hot-toast";

const handleRedirect = () => {
  window.location.href = "https://printify.com/blog/what-is-a-niche/";
};

const handleBanner = (e) => {
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
      <p>Creating first product facility is not available now.</p>
    </div>
  ));
};

const Banner = () => {
  return (
    <section className="banner">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="left">
        <h1>Double your chances of making that first sale!</h1>
        <p>
          Stand out from competition and build a customer base with the help of
          our AI powered Niche Generator in less than a minute
        </p>
        <div className="buttons">
        <button className="cta-button" onClick={handleBanner}>
          Try it Now
        </button>
        <button className="cta-button2" onClick={handleRedirect}>
          <div className="content">
            <img src="../images/play-button.png" alt="" />What's a niche?
          </div>
        </button>
        </div>
      </div>
      <div className="right">
        <img src="../images/niche-preview-lg.png" alt="Banner" />
      </div>
    </section>
  );
};

export default Banner;
