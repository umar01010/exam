import React from "react";
import "./customersblock.css";
import CustomersCard from "../CustomersCard/CustomersCard";

// Images
import Photo1 from "../../../images/Enshteyn.jpg";
import Stars from "../../../images/Vector.png";
import Wolf from "../../../images/Wolf.png"

const CustomersBlock = () => {
  return (
    <section className="customers">
      <div className="container">
        <h1 className="customers_title">Our happy customers</h1>

        <div className="customers_cards">
          <CustomersCard
            name={"Wolf"}
            logo={Wolf}
            stars={Stars}
            text={"Great product, highly recommended!"}
          />
          <CustomersCard
            name={"Einshteyn"}
            logo={Photo1}
            stars={Stars}
            text={"Great product, highly recommended!"}
          />
          <CustomersCard
            name={"Wolf"}
            logo={Wolf}
            stars={Stars}
            text={"Great product, highly recommended!"}
          />
          <CustomersCard
            name={"Umar"}
            logo={Photo1}
            stars={Stars}
            text={"Great product, highly recommended!"}
          />
          <CustomersCard
            name={"Wolf"}
            logo={Wolf}
            stars={Stars}
            text={"Great product, highly recommended!"}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomersBlock;
