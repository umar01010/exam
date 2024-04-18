import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../assets/pages/Context/CardContext"; // Импортируем контекст

// Images
import Logo from "../../assets/images/Frame.png";
import Basket from "../../assets/images/shopping-cart.png";

const Header = () => {
  const { addToCart } = useCart(); 

  return (
    <header>
      <div className="container">
        <div className="header">
          <Link to="/" className="header_logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="header_left">
            <div className="header_links">
              <nav>
                <ul className="links">
                  <li>
                    <Link className="link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/admin">
                      Admin
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Link className="basket_hrew" to="/Basket">
              <div className="header_button">
                <button>
                  <img src={Basket} alt="Basket" />
                  Add to cards ({addToCart})
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
