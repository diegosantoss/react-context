import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <section className="cart__empty">
    <h2>Your cart is empty =[</h2>
    <p>
      <Link to="/">back to home</Link>
    </p>
  </section>
);
