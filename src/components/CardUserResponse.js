import React from "react";
import close from "../assets/images/close.png";

const CardUserResponse = ({ color, image, msg, setIsPopupVisible }) => (
  <>
    <div className="own-popup" style={color}>
      <img
        src={close}
        alt="close-Icon"
        className="close-image"
        onClick={() => setIsPopupVisible(false)}
      />
      <img src={image} alt="response-image" className="response-image" />
      <p>{msg}</p>
    </div>
  </>
);

export default CardUserResponse;
