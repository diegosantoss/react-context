import React from "react";
import { Context } from "../Context";
import { FUNC_ADD_ITEM, FUNC_DELETE_ITEM } from "../Actions";
import axios from "axios";

const baseUrl = "http://tech.work.co/shopping-cart/products.json";

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: [],
      cart: [],
      checkFunc: props => this.checkFunc(props),
      updateItem: (item, type) => this.updateItem(item, type),
      loading: true
    };
  }

  checkFunc = props => {
    switch (props.type) {
      case "FUNC_DELETE_ITEM":
        this.updateState(FUNC_DELETE_ITEM({ props, ...this.state }));
        break;

      case "FUNC_ADD_ITEM":
        this.updateState(FUNC_ADD_ITEM({ props, ...this.state }));
        break;

      default:
        break;
    }
  };

  updateState = newState => {
    newState = delete newState.props;
    this.setState({ ...newState });
  };

  updateItem = (item, type) => {
    const cart = this.state.cart;
    cart.map(itemCart => {
      if (itemCart.id === item.id) {
        if (type === "more") {
          return itemCart.inventory++;
        } else {
          return itemCart.inventory--;
        }
      }
    });

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
