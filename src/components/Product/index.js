import React from "react";

export default props => {
  return (
    <section>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={props.product.image}
          alt={props.product.productTitle}
          title={props.product.productTitle}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.productTitle}</h5>
          <p className="card-text">
            {props.product.price.currency} {props.product.price.value}
          </p>
          <p>
            <button onClick={() => props.state.updateItem(props, "less")}>
              -
            </button>{" "}
            {props.product.inventory}{" "}
            <button onClick={() => props.state.updateItem(props, "more")}>
              +
            </button>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => props.state.deleteItem(props)}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};
