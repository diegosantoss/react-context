//libs
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

//defaults components
import Provider from "../../Provider";
import Header from "../Header/";
import Footer from "../Footer";

// components
import Home from "../Home";
import Cart from "../Cart";

const Config = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Header />

        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} />
          </Switch>
        </main>

        <Footer />
      </Provider>
    </BrowserRouter>
  );
};

const Info = {
  url: "https://google.com"
};

export { Config, Info };
