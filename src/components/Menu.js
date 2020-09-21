import React from "react";
import { useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Menu = () => {
  const history = useHistory();
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Menú</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => history.push("/")}>
          Pagina de canje
        </Dropdown.Item>

        <Dropdown.Item onClick={() => history.push("/history")}>
          Historial de canje
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default Menu;
