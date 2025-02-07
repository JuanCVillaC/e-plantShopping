import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  // Handle incrementing the quantity of an item
  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrementing the quantity of an item
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // If quantity reaches 0, remove the item from the cart
      dispatch(removeItem(item.name));
    }
  };

  // Handle removing an item from the cart
  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Unit Cost: {item.cost}</p>
        <p>Subtotal: ${parseFloat(item.cost.replace('$', '')) * item.quantity}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleRemove} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;