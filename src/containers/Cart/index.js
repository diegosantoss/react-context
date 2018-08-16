import React from "react";
import "./index.css";
import { Context } from "../../Context";
import store from "store";
import Cart from "../../components/Cart";
import NoCart from "../../components/Cart/NoCart";

export default () => {
  return (
    <React.Fragment>
      <Context.Consumer>
        {state => {
          const cartLength = state.cart.length;
          return (
            <section className="cart__container">
              <section className="cart__content content">
                {cartLength >= 1 ? (
                  state.cart.map((cartItem, index) => {
                    return <Cart state={state} item={cartItem} />;
                  })
                ) : (
                  <NoCart />
                )}
              </section>
            </section>
          );
        }}
      </Context.Consumer>
    </React.Fragment>
  );
};
