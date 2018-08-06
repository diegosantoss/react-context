import React from "react";
import { Context } from "../Context";
import axios from "axios";

const baseUrl = "http://tech.work.co/shopping-cart/products.json";

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      deleteItem: item => this.deleteItem(item),
      updateItem: (item, type) => this.updateItem(item, type),
      loading: true
    };
  }

  deleteItem = item => {
    const cart = this.state.cart.filter(
      cartItem => cartItem.id !== item.product.id
    );

    this.setState({ cart });
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

    this.setState({ cart });
  };

  componentDidMount() {
    axios(baseUrl)
      .then(response => {
        if (!!response) {
          return response;
        }
      })
      .then(response => {
        const cart = response.data;
        this.setState({ cart, loading: false });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    const { cart } = this.state;
    if (!!cart) {
      return (
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }
}

export default Provider;
