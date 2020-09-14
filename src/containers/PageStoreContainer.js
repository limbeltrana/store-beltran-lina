import React, { useState, useEffect } from "react";
import AddPoints from '../components/AddPoints'
import HeaderImage from "../components/HeaderImage";
import TopProfile from "../components/TopProfile";
import Card from "../components/Card";
import { getProducts, getUser } from "../components/FetchRequest";
import configuration from "../config";
import { useStateValue } from "../context/State";

const PageStoreContainer = () => {
  const [{ products, user }, dispatch] = useStateValue();
  const [addPointsByUser, setAddPointsByUser] = useStateValue()


  useEffect(() => {
    getDataUser();
    getProductsList(
      configuration.Api,
      configuration.Products,
      configuration.Token
    );
  }, []);

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

const handleChangePoints = () =>{
  
}

  return (
    <>
      <TopProfile user={user} />
      <HeaderImage />
      <AddPoints />
      <Card />
    </>
  );
};
export default PageStoreContainer;
