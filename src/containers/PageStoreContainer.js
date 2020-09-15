import React, { useState, useEffect } from "react";
import AddPoints from "../components/AddPoints";
import HeaderImage from "../components/HeaderImage";
import TopProfile from "../components/TopProfile";
import Card from "../components/Card";
import {
  getProducts,
  getUser,
  PostApiAddUserPoints,
} from "../components/FetchRequest";
import configuration from "../config";
import { useStateValue } from "../context/State";

const PageStoreContainer = () => {
  const [{ products, user }, dispatch] = useStateValue();
  const [addPointsByUser, setAddPointsByUser] = useState({ points: 0 });

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
  }, [user.points]);

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
  return (
    <>
      <TopProfile user={user} />
      <HeaderImage />
      <AddPoints
        addPointsForm={addPointsByUser}
        onChange={handleChangePoints}
        onSubmit={handleSubmit}
      />
      <Card products={products.products} />
    </>
  );
};
export default PageStoreContainer;
