const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_COUNTRY":
      return (state = action.country);
    default:
      return state;
  }
};

export default countryReducer;
