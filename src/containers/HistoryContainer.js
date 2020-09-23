import React, { useEffect } from "react";
import { getHistory } from "../components/FetchRequest";
import configuration from "../config";
import HistoryCard from "../components/HistoryCard";
import { useStateValue } from "../context/State";
import { CardDeck, Container } from "react-bootstrap";

const HistoryContainer = () => {
  const [{ productsHistory }, dispatch] = useStateValue();

  useEffect(() => {
    getUserHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserHistory = async () => {
    let url = `${configuration.Api}${configuration.UserHistory}`;
    let userData = await getHistory(url, configuration.Token);
    let resApi = await userData.json();
    dispatch({
      type: "GET_HISTORY",
      productsHistory: resApi,
    });
  };

  const showProducts = () => {
    return Object.values(productsHistory).map((product, index) => {
      return (
        <HistoryCard
          key={index}
          productImage={product.img.url}
          category={product.category}
          productName={product.name}
        />
      );
    });
  };

  return (
    <>
      <Container>
        <h1 className="history-title">Historial de compra</h1>
        <CardDeck>{showProducts()}</CardDeck>
      </Container>
    </>
  );
};
export default HistoryContainer;
