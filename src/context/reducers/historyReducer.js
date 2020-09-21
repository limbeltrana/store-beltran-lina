const historyReducer = (state, action) => {
  switch (action.type) {
    case "GET_HISTORY":
      return {
        ...state,
        ...action.productsHistory,
      };
    default:
      return state;
  }
};
export default historyReducer;
