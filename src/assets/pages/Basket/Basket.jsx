import React from "react";
import "./basket.css";

const Basket = ({}) => {
  const itemsFromStorage = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <section className="basket_block">
      <div className="tagline">
        <div className="container">
          <h1 className="basket_tag_text">1.Shopping Card</h1>
        </div>
      </div>

      <div className="container">
        <ul>
          {itemsFromStorage.map((e) => (
            <li className="basket_card">
              <img className="basket_card_img" src={e.image} />
              <div className="basket_prices">
                <div className="basket_card_price">${e.price}</div>
                <div className="basket_card_id">Product number: {e.id}</div>
                <div className="basket_card_title">{e.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Basket;