import React from "react";
import { Helmet } from "react-helmet";
import Products from "../Products";
import "./index.css";

export default () => (
  <React.Fragment>
    <Helmet>
      <title>REACT CONTEXT - Work.co API</title>
    </Helmet>
    <Products />
  </React.Fragment>
);
