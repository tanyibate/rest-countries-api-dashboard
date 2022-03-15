import countryReducer from "./countryReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  country: countryReducer,
});

export default allReducers;
