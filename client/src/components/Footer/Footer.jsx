import React from "react";
import Payment from "../../images/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span> Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <lorem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            consequatur.
          </lorem>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            blanditiis mollitia suscipit voluptates corporis consequuntur
            necessitatibus neque accusamus temporibus assumenda.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">LOGO</span>
          <span className="copyright">@copyright 2023 tawfiq</span>
        </div>
        <div className="right">
          <img src={Payment} alt="Payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
