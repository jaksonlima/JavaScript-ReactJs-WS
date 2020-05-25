import React from "react";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import "./config/ReactotronConfig";

import GlobalStyle from "./styles/global";
import Routers from "./routes/index";

import { store, persistor } from "./store/index";

import history from "./services/history";

import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routers />
          <GlobalStyle />
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
