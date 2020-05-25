import React from "react";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth/index";
import DefaultLayout from "../pages/_layouts/default/index";

import { store } from "../store/index";

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/deshboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
