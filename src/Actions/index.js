export const FUNC_DELETE_ITEM = props => {
  let cart = props.cart.filter(each => {
    return each.id !== props.props.props.item.id;
  });

  props.cart = cart;


  console.log(props)
  return props;
};

export const FUNC_ADD_ITEM = props => {
  console.log(props);
  const checkCart = props.cart.some(
    itemCart => itemCart.id === props.props.props.product.id
  );

  if (!!checkCart) {
    return props;
  } else {
    props.cart.push(props.props.props.product);
    return props;
  }
};

// export const FUNC_DELETE_ITEM = props => {
//   const cart = props.cart.filter(
//     cartItem => cartItem.id !== props.props.props.product.id
//   );

//   props.cart = cart;

//   return props;
// };
