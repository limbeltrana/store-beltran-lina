import React from "react";

const Card = ({ products }) => {
  let productsArray = products ? products : [];
  console.log(products);
  return (
    <div className="products">
      <div className="line">
        {productsArray.map((product) => {
          return (
            <div className="productCard">
              <div className ='internal_card'> 
                <div className="photo">
                <img src={product.img.url} alt="product_image" />
              </div>

              <div className="info">
                <p className="productCategory">{product.category}</p>
                <p className="productName">{product.name}</p>
              </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
