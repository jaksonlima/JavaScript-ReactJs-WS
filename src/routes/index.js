import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

import Deshboard from "../pages/Deshboard";
import Profile from "../pages/Profile";
import CadastroProduto from "../pages/CadastroPedido";
import Produto from "../pages/Produto";
import CarinhoProduto from "../pages/Produto/listaProdutos";

export default function Routers() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/deshboard" component={Deshboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/cadastro" component={CadastroProduto} isPrivate />
      <Route path="/produto" component={Produto} isPrivate />
      <Route path="/carinho" component={CarinhoProduto} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
