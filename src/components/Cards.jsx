import React from "react";
import "./styles/Cards.css";

const Cards = ({ productData }) => {
  console.log(productData);
  return (
    <>
      <div className="Main-Card-Container">
        {productData.products.map((product) => (
          <div className="Card-Container">
            <div className="Card-image">
              {" "}
              <img src={product.thumbnail} alt="IMG" />
            </div>
            <h5>{product.brand}</h5>
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.rating}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
