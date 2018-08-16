import React from "react";

export default props => {
  return (
    <section className="cart__content__item">
      <section className="cart__content__item__info">
        <h2>{props.item.productTitle}</h2>
        <p>
          {props.item.price.currency}: {props.item.price.value}
        </p>
      </section>
      <section className="cart_content_item_button">
        <button
          className="cart__button button"
          onClick={() => props.state.updateItem(props.item, "less")}
        >
          -
        </button>
        <h3>{props.item.inventory}</h3>
        <button
          className="cart__button button"
          onClick={() => props.state.updateItem(props.item, "more")}
        >
          +
        </button>
      </section>
      <button
        className="cart__button__delete button"
        onClick={() => props.state.deleteItem(props.item)}
      >
        X
      </button>
    </section>
  );
};
