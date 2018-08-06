import React from "react";
import { Context } from "../../Context";
import Product from "../../components/Product";

export default () => {
  return (
    <React.Fragment>
      <Context.Consumer>
        {state => {
          return state.cart.map((product, index) => {
            return <Product key={index} product={product} state={state} />;
          });
        }}
      </Context.Consumer>
    </React.Fragment>
  );
};
