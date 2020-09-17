import React from "react";
import Logo from "../assets/images/aerolab-logo.svg";
import Coin from "../assets/images/coin.svg";

const TopProfile = ({ user }) => {
  console.log(user);
  return (
    <div className="top">
      <div className="box">
        <div className="profile">
          <p className="userName">{user.name}</p>
          <div className="pointsAvailable">
            <div className="Rectangle">
              <p>{user.points}</p>
              <img src={Coin} className="money" />
            </div>
          </div>
        </div>
        <img src={Logo} alt="logoAerolab" className="logo" />
      </div>
    </div>
  );
};
export default TopProfile;
