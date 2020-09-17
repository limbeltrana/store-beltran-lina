import React, { useState, useRef } from "react";
import BuyBlue from "../assets/images/buy-blue.svg";
import BuyWhite from "../assets/images/buy-white.svg";
import Coin from "../assets/images/coin.svg";

const Card = ({
  productImage,
  category,
  productName,
  products,
  showProducts,
}) => {
  const overlayContainer = useRef();

  /*   let productsArray = products ? products : [];

  ; */
  return (
    <div
      className="productCard"
      onMouseOver={() =>
        (overlayContainer.current.style.visibility = "visible")
      }
      onMouseOut={() => (overlayContainer.current.style.visibility = "hidden")}
    >
      <div ref={overlayContainer} className="overlayCard">
        <div className="overlay_card_inner">
          <div className="buyWhiteIcon">
            <img src={BuyWhite} alt="buy_white" />
          </div>
          <div className="center-money-button">
            <div className="cardMoney">
              <p>12000</p>
              <img src={Coin} />
            </div>
            <button className="buttonReddem">Redimir Ahora</button>
          </div>
        </div>
      </div>

      <div className="internal_card">
        <div className="buyBlueIcon">
          <img src={BuyBlue} alt="buy_blue_icon" />
        </div>
        <div className="photo">
          <img src={productImage} alt="product_image" />
        </div>

        <div className="info">
          <p className="productCategory">{category}</p>
          <p className="productName">{productName}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;

/* return (<div className="products">
      <div className="line">
        {productsArray.map((product) => {
          return (
            <div
              key={product.id}
              className="productCard"
              onMouseOver={overlayCard}
              onMouseOut={() => setShowHoverCard(false)}
            >
              <div
                className={`internal_card${showHoverCard ? "_overlay" : ""}`}
              >
                <div className="buyBlueIcon">
                  <img
                    src={showHoverCard ? BuyWhite : BuyBlue}
                    alt="buy_blue_icon"
                  />
                </div>
                {showHoverCard ? (
                  <>
                    <div className="cardMoney">
                      <p>12000</p>
                      <img src={Coin} />
                    </div>
                    <button className="buttonReddem">Redimir Ahora</button>
                  </>
                ) : null}

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
  ); */

/* 
  return (
    <div className="products">
      <div className="line">
        <div
          key={key}
          className="productCard"
          onMouseOver={overlayCard}
          onMouseOut={() => setShowHoverCard(false)}
        >
          <div className={`internal_card${showHoverCard ? "_overlay" : ""}`}>
            <div className="buyBlueIcon">
              <img
                src={showHoverCard ? BuyWhite : BuyBlue}
                alt="buy_blue_icon"
              />
            </div>
            {showHoverCard ? (
              <>
                <div className="cardMoney">
                  <p>12000</p>
                  <img src={Coin} />
                </div>
                <button className="buttonReddem">Redimir Ahora</button>
              </>
            ) : null}

            <div className="photo">
              <img src={productImage} alt="product_image" />
            </div>

            <div className="info">
              <p className="productCategory">{category}</p>
              <p className="productName">{productName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); */
