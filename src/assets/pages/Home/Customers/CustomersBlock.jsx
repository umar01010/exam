import React from "react";
import "./customersblock.css";
import CustomersCard from "../CustomersCard/CustomersCard";
import Photo1 from "../../../images/Enshteyn.jpg";
import Stars from "../../../images/Vector.png";

const CustomersBlock = () => {
  return (
    <section className="customers">
      <div className="container">
        <h1 className="customers_title">Our happy customers</h1>

        <div className="customers_cards">
          <CustomersCard
            name={"Umar"}
            logo={Photo1}
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
            name={"Umar"}
            logo={Photo1}
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
            name={"Umar"}
            logo={Photo1}
            stars={Stars}
            text={"Great product, highly recommended!"}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomersBlock;
