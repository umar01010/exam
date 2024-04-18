import React from "react";
import "./home.css";
import Swiper from "./Swiper/Swiper";
import Products from "./Products/Products";
import Free from "./Free/Free";
import CustomersBlock from "./Customers/CustomersBlock";
import Email from "./Email/Email";
import Footer from "../../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <div className="tagline">
        <h1 className="tag_text">Tagline: Your Gateway to Stylish Finds</h1>
      </div>

      <Swiper />
      <Products />
      <Free />
      <CustomersBlock />
      <Email />
      <Footer />
    </div>
  );
}

export default Home;
