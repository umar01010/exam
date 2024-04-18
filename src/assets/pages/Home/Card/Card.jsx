import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ item, addToCart}) => {
  return (
    <div className="card">
      <Link className="link_to_card" to={`/SinglePage/${item.id}`}>
        <center>
          <img src={item.image} alt="Image" />
        </center>
        <div className="item_title">{item.title}</div>
        <div className="item_description">{item.description}</div>
        <div className="item_price">€{item.price}</div>
      </Link>
      <div className="card_btns">
        <button className="add" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
        <button className="save">
          Save for later
        </button>
      </div>
    </div>
  );
};

export default Card;

