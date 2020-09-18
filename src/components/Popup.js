import React from "react";
/* import { useSelector } from 'react-redux'; */

const Popup = ({ isPopupVisible, children }) => {
  /* const { isMenuOpen } = useSelector(state => state.MenuBar); */
  const style = isPopupVisible === true ? {
    opacity: "1", visibility: "visible", display: "flex", flexFlow: "row nowrap",
    justifyContent: "center", alignItems: "center", overflow: "hidden"
  } : null;

  /* const widthStyle = isMenuOpen ? { paddingLeft: '26em' } : { width: '100vw' }; */

  return (
    <div
      id="popup1"
      style={{ ...style /*,  ...widthStyle */ }}
      className="overlay"
    >
      <div>{children}</div>
    </div>
  );
};

export default Popup;