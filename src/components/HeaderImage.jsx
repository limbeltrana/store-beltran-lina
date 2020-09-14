import React from "react";
import headerImage from "../assets/images/header-x2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const HeaderImage = () => {
  return (
    <div className="header">
      <div className="cover">
        <img className="headerImage" src={headerImage} fluid />
        <h1 className="headerText">Electronics </h1>
      </div>
    </div>
  );
};
export default HeaderImage;
