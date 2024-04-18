import React from "react";
import "./customerscard.css";

const CustomersCard = (Props) => {
  return (
    <div className="cus_card">
      <div className="cus_card_hdr">
        <div className="cus_card_hdr_left">
          <img className="cus_card_hdr_left_logo" src={Props.logo}/> 
          <div className="cus_card_hdr_left_name">{Props.name}</div>
        </div>

        <img className="cus_card_hdr_right" src={Props.stars}/> 
      </div>

      <div className="cus_card_text">{Props.text}</div>

    </div>
  );
};

export default CustomersCard;


