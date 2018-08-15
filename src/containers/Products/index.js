import React from "react";
import { Context } from "../../Context";
import Product from "../../components/Product";
import "./index.css";

export default () => {
  return (
    <React.Fragment>
      <Context.Consumer>
        {state => {
          return (
            <section className="products content">
              {state.allProducts.map((product, index) => {
                return <Product key={index} product={product} state={state} />;
              })}
            </section>
          );
        }}
      </Context.Consumer>
    </React.Fragment>
  );
};
