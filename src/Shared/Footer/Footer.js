import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5">
      <p className="footer">
        <small>
          copyright{" "}
          <img
            className="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Copyright.svg/2048px-Copyright.svg.png"
            alt=""
          />{" "}
          {year}{" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
