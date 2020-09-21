import React, { useRef } from "react";
import BuyBlue from "../assets/images/buy-blue.svg";
import BuyWhite from "../assets/images/buy-white.svg";
import Coin from "../assets/images/coin.svg";

const Card = ({
  productImage,
  category,
  productName,
  cost,
  availableUserPoints,
  productId,
  postRedeemUserPoints
}) => {
  const overlayContainer = useRef();
  const youNeed = useRef();
  return (
    <div
      className="productCard"
      onMouseOver={() => {
        if (cost < availableUserPoints) {
          return (overlayContainer.current.style.visibility = "visible");
        } else {
          return (youNeed.current.style.visibility = "visible");
        }
      }}
      /*  onMouseOver={() =>
        (overlayContainer.current.style.visibility = "visible")
      } */
      onMouseOut={() => (
        (overlayContainer.current.style.visibility = "hidden"),
        (youNeed.current.style.visibility = "hidden")
      )}
    >
      <div ref={overlayContainer} className="overlayCard">
        <div className="overlay_card_inner">
          <div className="buyWhiteIcon">
            <img src={BuyWhite} alt="buy_white" />
          </div>

          <div className="center-money-button">
            <div className="cardMoney">
              <p>{cost}</p>
              <img src={Coin}  alt='coin-icon'/>
            </div>
            <button
              className="buttonReddem"
              onClick={() => {
                console.log(productId);
                console.log(productName);
                postRedeemUserPoints(productId);
              }}
            >
              Redimir Ahora
            </button>
          </div>
        </div>
      </div>

      <div ref={youNeed} className="you-need">
        <div className="gray-chip">
          <p>Tu necesitas {cost - availableUserPoints}</p>
          <img src={Coin} className="you-need-money" alt='coin-icon'/>
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
