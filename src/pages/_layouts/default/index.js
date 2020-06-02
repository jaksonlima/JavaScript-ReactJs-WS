import React from "react";
import Proptypes from "prop-types";

import Header from "../../../components/Header/index";
import { Wrapper } from "./styles";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.prototype = {
  children: Proptypes.element.isRequired,
};
