import React, { useState, useEffect } from "react";
import "./view.css";
import ArrayImage from "../../images/Array.png"; // Переименовал переменную Array в ArrayImage
import { Link } from "react-router-dom";
import ViewCard from "../Home/ViewCard/ViewCard";

const ViewAll = () => {
  const [viewCard, setViewCard] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setViewCard(json));
  }, []);

  console.log(viewCard);

  return (
    <section>
      <div className="container">
        <div className="view_header">
          <Link to="/">
            <button className="view_back">
              <img
                className="view_header_back"
                src={ArrayImage}
                alt="Array"
              ></img>
              {""}
            </button>
          </Link>
          <div className="view_header_title">All goods</div>
        </div>

        <div className="View_items">
          {viewCard.length &&
            viewCard.map((e) => <ViewCard key={e.id} item={e} />)}
        </div>
      </div>
    </section>
  );
};

export default ViewAll;
