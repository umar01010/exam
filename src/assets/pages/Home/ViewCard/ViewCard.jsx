import React from "react";
import "./viewcard.css";
import { Link } from "react-router-dom";

const ViewCard = ({ item }) => {
  return (
    <div className="Viewcard">
      <Link className="link_to_card" to={`/SinglePage/${item.id}`}>
        <center>
          <img src={item.image} alt="Image" />
        </center>
        <div className="item_title">{item.title}</div>
        <div className="item_description">{item.description}</div>
        <div className="item_price">€{item.price}</div>

        <div className="card_btns">
          <button className="add">Add to Card</button>
          <button className="save">Save for later</button>
        </div>
      </Link>
    </div>
  );
};

export default ViewCard;
