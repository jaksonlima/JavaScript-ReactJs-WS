import { createStore, compose, applyMiddleware } from "redux";
import composeWithDevTools from "../config/ReactReduxDevTools";

export default (reducers, middlewares) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(
          console.tron.createEnhancer(),
          composeWithDevTools(applyMiddleware(...middlewares))
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
