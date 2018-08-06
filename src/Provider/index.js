import React from "react";
import { Context } from "../Context";
import axios from "axios";

const baseUrl = "http://tech.work.co/shopping-cart/products.json";

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: [],
      cart: [],
      addItem: item => this.addItem(item),
      updateItem: (item, type) => this.updateItem(item, type),
      deleteItem: item => this.deleteItem(item),
      loading: true
    };
  }

  addItem = item => {
    const cart = this.state.cart;
    const checkCart = cart.some(itemCart => itemCart.id === item.product.id);

    if (!!checkCart) {
      return;
    } else {
      cart.push(item.product);
      this.setState({ cart });
      return;
    }
  };

  updateItem = (item, type) => {
    const cart = this.state.cart;

    cart.map(itemCart => {
      if (itemCart.id === item.product.id) {
        if (type === "more") {
          item.product.inventory++;
        } else {
          item.product.inventory--;
        }
      }
      return;
    });

    return this.setState({ cart });
  };

  deleteItem = item => {
    const cart = this.state.cart.filter(
      cartItem => cartItem.id !== item.product.id
    );

    return this.setState({ cart });
  };

  componentDidMount() {
    axios(baseUrl)
      .then(response => {
        if (!!response) {
          return response;
        }
      })
      .then(response => {
        const allProducts = response.data;
        this.setState({ allProducts, loading: false });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    const { allProducts } = this.state;
    if (!!allProducts) {
      return (
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }
}

export default Provider;
