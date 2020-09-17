import React from "react";
import headerImage from "../assets/images/header-x2.png";

const HeaderImage = () => {
  return (
    <div className="header">
      <div className="cover">
        <img className="headerImage" src={headerImage} />
        <h1 className="headerText">Electronics </h1>
      </div>
    </div>
  );
};
export default HeaderImage;
