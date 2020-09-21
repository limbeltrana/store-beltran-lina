import React from "react";
import { StateProvider } from "./context/State";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PageStoreContainer from "./containers/PageStoreContainer";
import mainReducer from "./context/reducers/mainReducer";
import HistoryContainer from "./containers/HistoryContainer";
import Menu from './components/Menu'

function App() {
  const initialState = {
    user: {
      name: "",
      points: 0,
    },
    products: [],
    productsHistory: [],
  };

  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <BrowserRouter>
      <Menu/>
        <Switch>
          <>
          <Container fluid>
            <Route exact path="/" component={PageStoreContainer} />
            <Route exact path="/history" component={HistoryContainer} />
          </Container>
          </>
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
