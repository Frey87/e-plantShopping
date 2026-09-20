import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    let total = 0;

    cart.forEach((item) => {
      const itemCost = parseFloat(item.cost.substring(1));
      total += itemCost * item.quantity;
    });

    return total;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference");
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.substring(1));
    return itemCost * item.quantity;
  };

  const totalAmount = calculateTotalAmount();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <div className="cart-summary">
        <h3>
          Total Cart Amount: ${totalAmount.toFixed(2)}
        </h3>
      </div>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>

              <p>Unit Price: {item.cost}</p>

              <div className="cart-item-quantity">
                <button onClick={() => handleDecrement(item)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => handleIncrement(item)}>
                  +
                </button>
              </div>

              <p>
                Subtotal: ${calculateTotalCost(item).toFixed(2)}
              </p>

              <button
                className="remove-button"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button onClick={handleContinueShopping}>
          Continue Shopping
        </button>

        <button onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;