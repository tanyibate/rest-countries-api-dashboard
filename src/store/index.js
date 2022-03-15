import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

export default () => {
  let store = createStore(
    allReducers,
    composeWithDevTools(
      applyMiddleware()
      // other store enhancers if any
    )
  );
  return store;
};
