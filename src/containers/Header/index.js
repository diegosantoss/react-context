import React from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import store from "store";
import "./index.css";

export default () => {
  return (
    <React.Fragment>
      <Context.Consumer>
        {state => {
          return (
            <header>
              <section className="header__content content">
                <section className="header__content__logo">
                  <Link to="/">
                    <img src="https://assets.work.co/2506743/logo-fill-red486cd72396817e1ffe28493a67f32d9a.svg" />
                  </Link>
                </section>
                <nav className="header__content__nav">
                  <Link to="/cart">
                    <i class="fa fa-shopping-bag fa-fw" aria-hidden="true" />
                    <span>{state.cart.length}</span>
                  </Link>
                </nav>
              </section>
            </header>
          );
        }}
      </Context.Consumer>
    </React.Fragment>
  );
};
