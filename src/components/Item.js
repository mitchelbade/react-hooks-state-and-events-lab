import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  function cartFun() {
    setCart(!cart)
  }

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartFun}>{cart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
