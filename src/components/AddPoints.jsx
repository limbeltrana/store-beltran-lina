import React from "react";

const AddPoints = () => {
  return (
    <>
      <div className="addPointsMenu">
        <form>
          <div className="buttonPoint">
            <div className="roundedBackForm">
              {/* <p>1000</p> */}
              <div className="selection">
                <input type="radio" id="1000" name="points" value="1000" />
                <label for="addPoint">1000</label>
              </div>
            </div>
          </div>

          <div className="buttonPoint2">
            <div className="roundedBackForm2">
              {/* <p>1000</p> */}
              <div className="selection">
                <input type="radio" id="5000" name="points" value="5000" />
                <label for="addPoint">5000</label>
              </div>
            </div>
          </div>

          <div className="buttonPoint3">
            <div className="roundedBackForm3">
              {/* <p>1000</p> */}
              <div className="selection">
                <input type="radio" id="7500" name="points" value="7500" />
                <label for="addPoint">7500</label>
              </div>
            </div>
          </div>
          <button type= 'submit' className='addPointsButton'>
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
