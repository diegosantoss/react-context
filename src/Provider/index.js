import React from "react";
import { Context } from "../Context";
import axios from "axios";
import { addItem, updateItem, deleteItem } from "../Actions";

const baseUrl = "http://tech.work.co/shopping-cart/products.json";

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      allProducts: [],
      cart: [],
      addItem,
      updateItem,
      deleteItem,
      loading: true
    };
  }

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
