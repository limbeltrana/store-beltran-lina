import React, { useState, useEffect } from "react";
import AddPoints from "../components/AddPoints";
import HeaderImage from "../components/HeaderImage";
import TopProfile from "../components/TopProfile";
import Card from "../components/Card";
import BuyBlue from "../assets/images/buy-blue.svg";
import BuyWhite from "../assets/images/buy-white.svg";
import Coin from "../assets/images/coin.svg";

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
  const [showHoverCard, setShowHoverCard] = useState(false);

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

  /*   const showProducts =() =>{
let productsArray = products.products ? products.products : [];
console.log(productsArray);
return( 
  productsArray.map((product) => {
    console.log(product)
    return(
     <Card
       key={product.id}
       productImage={product.img.url}
       category={product.category}
       productName={product.name}
     />
   )}))
  } */

  const showProducts = () => {
    let productsArray = products.products ? products.products : [];
    return productsArray.map((product, index) => {
      return (
        <Card
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
      <TopProfile user={user} />
      <HeaderImage />
      <AddPoints
        addPointsForm={addPointsByUser}
        onChange={handleChangePoints}
        onSubmit={handleSubmit}
      />
      {/* <Card showProducts={showProducts} /> */}
      <div className="products">
        <div className="line">{showProducts()}</div>
      </div>
    </>
  );
};
export default PageStoreContainer;

/* 

  const overlayCard = () => {
     console.log("mouuuuuuuuuuuseeeeeeeeee");
     setShowHoverCard(true);
   };
const showProducts = () => {
    let productsArray = products.products ? products.products : [];
      
      return (
        <div className="products">
          <div className="line">
            {productsArray.map((product) => {
              return (
                <div
                  key={product.id}
                  className="productCard"
                  onMouseOver={overlayCard}
                  onMouseOut={() => setShowHoverCard(false)}
                >
                  <div
                    className={`internal_card${
                      showHoverCard ? "_overlay" : ""
                    }`}
                  >
                    <div className="buyBlueIcon">
                      <img
                        src={showHoverCard ? BuyWhite : BuyBlue}
                        alt="buy_blue_icon"
                      />
                    </div>
                    {showHoverCard ? (
                      <>
                        <div className="cardMoney">
                          <p>12000</p>
                          <img src={Coin} />
                        </div>
                        <button className="buttonReddem">Redimir Ahora</button>
                      </>
                    ) : null}

                    <div className="photo">
                      <img src={product.img.url} alt="product_image" />
                    </div>

                    <div className="info">
                      <p className="productCategory">{product.category}</p>
                      <p className="productName">{product.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
  }; 
  
  
  
  */
