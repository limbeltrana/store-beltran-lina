import React, { useState, useEffect } from "react";
import AddPoints from "../components/AddPoints";
import HeaderImage from "../components/HeaderImage";
import TopProfile from "../components/TopProfile";
import Card from "../components/Card";
import Popup from "../components/Popup";
import CardUserResponse from "../components/CardUserResponse";
import successImg from "../assets/images/succesImg.gif";
import failImg from "../assets/images/failImg.gif";
import Pagination from "../components/Pagination";
import FormFilter from "../components/FormFilter";
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
  const [responseImg, setResponseImg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const productsPerPage = 16;
  const [formFilters, setFormFilters] = useState({
    category: "",
    price: "",
  });
  const [isCategoryDisabled, setIsCategoryDisabled] = useState(false);
  const [isPriceDisabled, setIsPriceDisabled] = useState(false);
  const [filteredProducts, setIsFilteredProducts] = useState([]);

  useEffect(() => {
    getDataUser();
    getProductsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    displayProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, currentPage]);

  useEffect(() => {
    getDataUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.points, isPopupVisible]);

  useEffect(() => {
    displayProducts();
  }, [filteredProducts]);

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

  const getProductsList = async () => {
    let url = `${configuration.Api}${configuration.Products}`;
    let data = await getProducts(url, configuration.Token);
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
    if (resApi.message === "Points Updated") {
      setIsPopupVisible(true);
      setCardColor(
        "linear-gradient(45deg, #fbb59d, #f6a69c, #f1979c, #f08f9c, #ee8d9b)"
      );
      setResponseImg(successImg);
      setMessageToUser("Tus puntos fueron actualizados exitosamente!!");
    } else {
      setIsPopupVisible(true);
      setResponseImg(failImg);
      setCardColor(
        "linear-gradient(215deg, rgba(157,218,168,1) 0%, rgba(165,218,150,1) 20%, rgba(165,218,150,1) 40%, rgba(171,218,135,1) 60%, rgba(173,218,132,1) 80%, rgba(176,219,125,1) 100%)"
      );
      setMessageToUser(
        "Lo sentimos hubo un inconveniente por favor intenta de nuevo!!"
      );
    }
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

  /*  function alertFunction() {
    setIsPopupVisible(true);
    setCardColor(
      "linear-gradient(45deg, #fbb59d, #f6a69c, #f1979c, #f08f9c, #ee8d9b)"
    );
    setResponseImg(successImg);
    setMessageToUser("Tu compra fue exitosa!!");
  }

  function myFunction() {
    setTimeout(alertFunction, 10000);
    console.log("me cambieeeeee", isPopupVisible);
  }
  myFunction(); */

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
    console.log("esta es la respuesta del api", resApi);
    console.log("esto es data", data);
    if (resApi.message === "You've redeem the product successfully") {
      setIsPopupVisible(true);
      setCardColor(
        "linear-gradient(45deg, #fbb59d, #f6a69c, #f1979c, #f08f9c, #ee8d9b)"
      );
      setResponseImg(successImg);
      setMessageToUser("Tu compra fue exitosa!!");
    } else {
      setIsPopupVisible(true);
      setResponseImg(failImg);
      setCardColor(
        "linear-gradient(215deg, rgba(157,218,168,1) 0%, rgba(165,218,150,1) 20%, rgba(165,218,150,1) 40%, rgba(171,218,135,1) 60%, rgba(173,218,132,1) 80%, rgba(176,219,125,1) 100%)"
      );
      setMessageToUser(
        "Lo sentimos hubo un inconveniente por favor intenta de nuevo!!"
      );
    }
    /* dispatch({
      type: "GET_USER",
      user: {
        ...user,
        points: resApi["New Points"],
      },
    }); */
  };

  const displayProducts = () => {
    let indexOfLastProducts = currentPage * productsPerPage;
    let indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    //let productsArray = products.products ? products.products : [];
    let productsArray =
      filteredProducts.length > 0
        ? filteredProducts
        : products.products
        ? products.products
        : [];
    console.log(productsArray);
    setCurrentProducts(
      productsArray.slice(indexOfFirstProducts, indexOfLastProducts)
    );
  };

  const showProducts = () => {
    return currentProducts.map((product, index) => {
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

  const filterDisabled = () => {
    const { category, price } = formFilters;

    if (category !== "" && category !== "0") {
      setIsPriceDisabled(true);
    } else {
      setIsPriceDisabled(false);
    }

    if (price !== "" && price !== "ANY_PRICE") {
      setIsCategoryDisabled(true);
    } else {
      setIsCategoryDisabled(false);
    }
  };

  const handleChangeFilter = (e) => {
    setFormFilters({
      ...formFilters,
      [e.target.name]: e.target.value,
    });
  };

  const tier = (price, product) => {
    switch (price) {
      case "ANY_PRICE":
        return true;
      case "SMALL_PRICE":
        return product.cost >= 0 && product.cost <= 300;
      case "MEDIUM_PRICE":
        return product.cost >= 301 && product.cost <= 600;
      case "LARGE_PRICE":
        return product.cost >= 601 && product.cost <= 1000;
      case "EXPENSIVE":
        return product.cost > 1000;
      default:
        return true;
    }
  };

  const filter = () => {
    let productsArray = products.products ? products.products : [];
    console.log(productsArray);
    const { category, price } = formFilters;
    let filteredProducts = productsArray.filter((product) => {
      if (!category && !price) {
        return true;
      } else {
        return category && category !== "0"
          ? product.category.indexOf(category) > -1
          : true || (price !== "" && price !== "ANY_PRICE")
          ? tier(price, product)
          : true;
      }
    });
    console.log(filteredProducts);
    setIsFilteredProducts(filteredProducts);
  };

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    filter();
  };

  return (
    <>
      <TopProfile user={user} />
      <HeaderImage />
      <FormFilter
        form={formFilters}
        onChange={handleChangeFilter}
        onSubmit={handleSubmitFilter}
        filterDisabled={filterDisabled}
        isCategoryDisabled={isCategoryDisabled}
        isPriceDisabled={isPriceDisabled}
      />
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
          <CardUserResponse
            color={{ "--cardColor": cardColor }}
            image={responseImg}
            msg={messageToUser}
            setIsPopupVisible={setIsPopupVisible}
          />
        </div>
      </Popup>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        allProducts={
          filteredProducts.length > 0
            ? filteredProducts
            : products.products
            ? products.products
            : []
        }
        /* filteredProducts.length >0
        ? filteredProducts
        : products.products
        ? products.products
        : []; */
      />
    </>
  );
};
export default PageStoreContainer;
