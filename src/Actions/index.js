export const addItem = item => {
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

export const updateItem = (item, type) => {
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

export const deleteItem = item => {
  const cart = this.state.cart.filter(
    cartItem => cartItem.id !== item.product.id
  );

  return this.setState({ cart });
};
