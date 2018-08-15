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
        <p>
          <button onClick={() => props.state.updateItem(props.item, "less")}>
            -
          </button>
          {props.item.inventory}
          <button onClick={() => props.state.updateItem(props.item, "more")}>
            +
          </button>
        </p>
        <button
          className="product__button button"
          onClick={() => props.state.deleteItem(props.item)}
        >
          Delete
        </button>
      </section>
    </section>
  );
};
