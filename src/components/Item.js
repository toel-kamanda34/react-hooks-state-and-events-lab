import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(!isInCart);
  };

  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item
