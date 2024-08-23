import React from "react";

const CardService = ({ title, price, img }) => {
  return (
    <>
      <div className="price__card">
        <h2>{title}</h2>
        <p>Цена: {price}</p>
        <img src={img} alt="price" />
      </div>
    </>
  );
};

export default CardService;
