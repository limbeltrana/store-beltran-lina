import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import historyReducer from "./historyReducer";

const mainReducer = ({ user, products, productsHistory }, action) => ({
  user: userReducer(user, action),
  products: productsReducer(products, action),
  productsHistory: historyReducer(productsHistory, action),
});

export default mainReducer;
