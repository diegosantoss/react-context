import React from "react";

export default props => {
  return (
    <section className="product">
      <h5 className="product__title">{props.product.productTitle}</h5>
      <p className="product__text">
        {props.product.price.currency}: {props.product.price.value}
      </p>

      <button
        className="product__button button"
        onClick={() => props.state.addItem(props)}
      >
        Add
      </button>
    </section>
  );
};
