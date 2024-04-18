import React from "react";
import "./footer.css";
import Logo from "../../assets/images/Frame.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_items">
            <img className="footer_logo" src={Logo} />
            <div className="footer_text">#footerwithoutadesign © 2024 Dosio Dosev.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

