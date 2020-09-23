import React from "react";

const AddPoints = ({ onChange, onSubmit} ) => {
  return (
    <>
      <div className="addPointsMenu">
        <form onSubmit ={onSubmit}>
          <div className="buttonPoint">
            <div className="roundedBackForm">
              <div className="selection">
                <input
                  type="radio"
                  id="1000"
                  name="points"
                  value={1000}
                  onChange={onChange}
                />
                <label htmlFor="points">1000</label>
              </div>
            </div>
          </div>

          <div className="buttonPoint2">
            <div className="roundedBackForm2">

              <div className="selection">
                <input
                  type="radio"
                  id="5000"
                  name="points"
                  value={5000}
                  onChange={onChange}
                />
                <label htmlFor="points">5000</label>
              </div>
            </div>
          </div>

          <div className="buttonPoint3">
            <div className="roundedBackForm3">
              <div className="selection">
                <input
                  type="radio"
                  id="7500"
                  name="points"
                  value={7500}
                  onChange={onChange}
                />
                <label htmlFor="points">7500</label>
              </div>
            </div>
          </div>
          <button type="submit" className="addPointsButton">
            Agregar puntos
          </button>
        </form>
        <div className="v1" />
        <p className="textData">Puntos a agregar</p>
        <hr />
      </div>
    </>
  );
};
export default AddPoints;
