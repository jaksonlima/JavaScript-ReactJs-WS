import { composeWithDevTools } from "redux-devtools-extension";

export default middlewares => {
  return composeWithDevTools(middlewares);
};
