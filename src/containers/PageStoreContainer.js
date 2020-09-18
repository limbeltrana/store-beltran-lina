import React, { useState, useEffect } from "react";
import AddPoints from "../components/AddPoints";
import HeaderImage from "../components/HeaderImage";
import TopProfile from "../components/TopProfile";
import Card from "../components/Card";
import Popup from "../components/Popup";
import CardUserResponse from "../components/CardUserResponse";
import {
  getProducts,
  getUser,
  PostApiAddUserPoints,
  PostApiReddemPoints,
} from "../components/FetchRequest";
import configuration from "../config";
import { useStateValue } from "../context/State";

const PageStoreContainer = () => {
  const [{ products, user }, dispatch] = useStateValue();
  const [addPointsByUser, setAddPointsByUser] = useState({ points: 0 });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [cardColor, setCardColor] = useState("");
  const [messageToUser, setMessageToUser] = useState("");

  useEffect(() => {
    getDataUser();
    getProductsList(
      configuration.Api,
      configuration.Products,
      configuration.Token
    );
  }, []);

  useEffect(() => {
    getDataUser();
    console.log("en usefeeectttt", isPopupVisible);
  }, [user.points, isPopupVisible]);

  const getDataUser = async () => {
    let url = `${configuration.Api}${configuration.User}`;
    let userData = await getUser(url, configuration.Token);
    let resApi = await userData.json();
    dispatch({
      type: "GET_USER",
      user: {
        name: resApi.name,
        points: resApi.points,
      },
    });
  };

  const getProductsList = async (api, hash, token) => {
    let url = `${api}${hash}`;
    let data = await getProducts(url, token);
    let resApi = await data.json();
    dispatch({
      type: "GET_PRODUCTS",
      products: resApi,
    });
  };

  const handleChangePoints = (e) => {
    setAddPointsByUser({
      ...addPointsByUser,
      [e.target.name]: e.target.value,
    });
  };

  const postAddPointsUser = async () => {
    let url = `${configuration.Api}${configuration.AddPoints}`;
    let pointsToSend = { amount: parseInt(addPointsByUser.points) };
    let data = await PostApiAddUserPoints(
      url,
      JSON.stringify(pointsToSend),
      configuration.Token
    );
    console.log(JSON.stringify(pointsToSend));
    let resApi = await data.json();
    console.log(resApi);
    dispatch({
      type: "GET_USER",
      user: {
        ...user,
        points: resApi["New Points"],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAddPointsUser();
  };

  function alertFunction() {
    setIsPopupVisible(true);
    setCardColor("chartreuse");
    setMessageToUser("Tu compra fue exitosa!!");
  }

  function myFunction() {
    setTimeout(alertFunction, 10000);
    console.log("me cambieeeeee", isPopupVisible);
  }
  myFunction();

  const postRedeemUsePoints = async (Id) => {
    let url = `${configuration.Api}${configuration.RedeemPoints}`;
    let productId = { productId: Id };
    console.log(productId);
    let data = await PostApiReddemPoints(
      url,
      JSON.stringify(productId),
      configuration.Token
    );
    console.log(JSON.stringify(productId));
    let resApi = await data.json();
    console.log(resApi);
    if (resApi.message === "You've redeem the product successfully") {
      setIsPopupVisible(true);
      setCardColor("chartreuse");
      setMessageToUser("Tu compra fue exitosa!!");
    } else{
      setIsPopupVisible(true);
      setCardColor("background: linear-gradient(45deg, #ee8d9b, #fbb59d);");
      setMessageToUser("Lo sentimos hubo un inconveniente por favor intenta de nuevo!!");
    }
    /* dispatch({
      type: "GET_USER",
      user: {
        ...user,
        points: resApi["New Points"],
      },
    }); */
  };

  const showProducts = () => {
    let productsArray = products.products ? products.products : [];
    return productsArray.map((product, index) => {
      return (
        <Card
          key={index}
          productImage={product.img.url}
          category={product.category}
          productName={product.name}
          productId={product["_id"]}
          cost={product.cost}
          availableUserPoints={user.points}
          postRedeemUserPoints={postRedeemUsePoints}
        />
      );
    });
  };

  return (
    <>
      <TopProfile user={user} />
      <HeaderImage />
      <AddPoints
        addPointsForm={addPointsByUser}
        onChange={handleChangePoints}
        onSubmit={handleSubmit}
      />
      <div className="products">
        <div className="line">{showProducts()}</div>
      </div>
      <Popup isPopupVisible={isPopupVisible}>
        <div className="inner-popup-container">
          <CardUserResponse />
        </div>
      </Popup>
    </>
  );
};
export default PageStoreContainer;
