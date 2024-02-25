import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>Made with ❤️ by Saurabh Verma</div>
      <button
        onClick={() =>
          (window.location.href =
            "https://saurabh-verma-portfolio.netlify.app/s")
        }
      >
        Contact me
      </button>
    </div>
  );
};

export default Footer;
