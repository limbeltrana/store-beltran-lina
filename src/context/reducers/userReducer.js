const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        ...action.user,
      };

    default:
      return state;
  }
};
export default userReducer;
