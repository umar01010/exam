import React from "react";
import "./email.css";

const Email = () => {
  return (
    <section className="email_section">
      <div className="container">
        <center>
          <div className="email_title">
            Stay in the Loop with <br /> the Latest Trends and Deals!
          </div>

          <div className="email_items">
            <input className="email_input" placeholder="Email" />
            <button className="email_follow">Subscribe</button>
          </div>
        </center>
      </div>
    </section>
  );
};

export default Email;
