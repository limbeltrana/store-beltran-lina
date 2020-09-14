import userReducer from "./userReducer";
import productsReducer from "./productsReducer";

const mainReducer = ({ user, products }, action) => ({
  user: userReducer(user, action),
  products: productsReducer(products, action),
});

export default mainReducer