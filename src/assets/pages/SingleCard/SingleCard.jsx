import React from "react";
import "./singlecard.css";

const SingleCard = ({ item }) => {
  return (
    <section className="single_section">
      <div className="container">
        <div className="single_card">
          <div className="single_card_left">
            <center>
              <img className="single_img" src={item.image} />
            </center>
          </div>

          <div className="single_card_right">
            <center>
              <h1 className="single_title">{item.title}</h1>
              <h1 className="single_discription">{item.description}</h1>
            </center>
            <div className="single_card_prices">
              <h1 className="single_price">Price: €{item.price}</h1>
              <h1 className="single_category">{item.category}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
