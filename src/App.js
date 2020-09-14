import React from "react";
import { StateProvider } from "./context/State";
import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PageStoreContainer from "./containers/PageStoreContainer";
import mainReducer from './context/reducers/mainReducer'

function App() {
  const initialState = {
    user: {
      name: "",
      points: 0,
    },
    products: [],
  };

  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <Container fluid>
        <div className="App">
          <PageStoreContainer />
        </div>
      </Container>
    </StateProvider>
  );
}

export default App;
