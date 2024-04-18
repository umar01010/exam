import React, { useState, useEffect } from "react";
import "./singlepage.css";
import SingleCard from "../SingleCard/SingleCard";
import { useParams } from "react-router-dom"; 

const SinglePage = () => {
  const { id } = useParams(); 
  const [singleCard, setSingleCard] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setSingleCard(json));
  }, [id]); 

  console.log(singleCard);

  return (
    <section>
      <div className="tagline">
        <div className="container">
          <h1 className="tagline_text">1) Single Card</h1>
        </div>
      </div>

      {singleCard && <SingleCard key={singleCard.id} item={singleCard} />}
    </section>
  );
};

export default SinglePage;
