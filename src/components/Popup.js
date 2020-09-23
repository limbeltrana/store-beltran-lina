import React from "react";

const Popup = ({ isPopupVisible, children }) => {

  const style = isPopupVisible === true ? {
    opacity: "1", visibility: "visible", display: "flex", flexFlow: "row nowrap",
    justifyContent: "center", alignItems: "center", overflow: "hidden"
  } : null;

  return (
    <div
      id="popup1"
      style={{ ...style}}
      className="overlay"
    >
      <div>{children}</div>
    </div>
  );
};

export default Popup;