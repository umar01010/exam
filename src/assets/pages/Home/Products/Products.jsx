// import React, { useState, useEffect } from "react";
// import Card from "../Card/Card";
// import Array from "../../../images/Array.png";
// import "./products.css";
// import { Link } from "react-router-dom";

// // Images
// import Primary from "../../../images/search.png";
// import Mistake from "../../../images/153-1533013_sorry-no-results-found_pixian_ai.png";

// const Products = () => {
//   const [card, setCard] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => setCard(json));
//   }, []);

//   const addToCart = (item) => {
//     const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = [...currentCart, item];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const deleteCard = (item) => {
//     const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = currentCart.filter((_, i) => i !== item);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setItems(updatedCart);
//   };

//   const handleSearchChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearchKeyPress = (event) => {
//     if (event.key === "Enter") {
//       setSearchTerm(searchInput);
//     }
//   };

//   const handleSearchButtonClick = () => {
//     setSearchTerm(searchInput);
//   };

//   const filteredCard = card.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <div className="view_all">
//         <div className="view_all_left">
//           <div className="view_all_left_title">New Arrivals</div>
//           <div className="view_all_left_subtitle">
//             Check out the latest products
//           </div>
//         </div>
//         <Link className="view_link" to="/ViewAll">
//           <button className="view_all_right">
//             View all <img className="array" src={Array} />
//           </button>
//         </Link>
//       </div>
//       <div className="search_container">
//         <center>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchInput}
//             onChange={handleSearchChange}
//             onKeyDown={handleSearchKeyPress}
//             className="search_input"
//           />
//           <button onClick={handleSearchButtonClick} className="search_button">
//             <img className="primary" src={Primary} />
//           </button>
//         </center>
//       </div>
//       <div className="items">
//         {filteredCard.length === 0 ? (
//           <div className="no-results">
//             <img src={Mistake} />
//           </div>
//         ) : (
//           filteredCard.map((e) => (
//             <Card key={e.id} item={e} addToCart={addToCart} deleteCard={deleteCard}/>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Array from "../../../images/Array.png";
import "./products.css";
import { Link } from "react-router-dom";

// Images
import Primary from "../../../images/search.png";
import Mistake from "../../../images/153-1533013_sorry-no-results-found_pixian_ai.png";

const Products = () => {
  const [card, setCard] = useState([]);
  const [filteredCard, setFilteredCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setCard(json);
        setFilteredCard(json);
      });
  }, []);

  const addToCart = (item) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...currentCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const deleteCard = (itemId) => {
    const updatedCard = filteredCard.filter((item) => item.id !== itemId);
    setFilteredCard(updatedCard);
    localStorage.setItem("cart", JSON.stringify(updatedCard));
  };
  
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(searchInput);
      filterItems(searchInput);
    }
  };

  const handleSearchButtonClick = () => {
    setSearchTerm(searchInput);
    filterItems(searchInput);
  };

  const filterItems = (searchInput) => {
    const filteredItems = card.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCard(filteredItems);
  };

  return (
    <div className="container">
      <div className="view_all">
        <div className="view_all_left">
          <div className="view_all_left_title">New Arrivals</div>
          <div className="view_all_left_subtitle">
            Check out the latest products
          </div>
        </div>
        <Link className="view_link" to="/ViewAll">
          <button className="view_all_right">
            View all <img className="array" src={Array} />
          </button>
        </Link>
      </div>
      <div className="search_container">
        <center>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyPress}
            className="search_input"
          />
          <button onClick={handleSearchButtonClick} className="search_button">
            <img className="primary" src={Primary} />
          </button>
        </center>
      </div>
      <div className="items">
        {filteredCard.length === 0 ? (
          <div className="no-results">
            <img src={Mistake} />
          </div>
        ) : (
          filteredCard.map((e) => (
            <Card
              key={e.id}
              item={e}
              addToCart={addToCart}
              deleteCard={deleteCard}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;