import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/Cart.css";
import CartItem from "./CartItem";

interface Props {}

const Cart: React.FC<Props> = () => {
  let cartItems = useContext(CartContext);
  return (
    <div className="cart-container">
      <div className="cart-total-details">
        <div className="cart-info">
          <p>
            <span>Total ({cartItems.length}) items</span>
          </p>
          <p>
            <span>Items Total: </span>
            <span className="cart-total-pretax">
              $
              {cartItems.reduce((acc, item) => {
                acc += item.price * item.quantity;
                return acc;
              }, 0)}
            </span>
          </p>
          <p>
            <span>Taxes: </span>
            <span className="cart-total-taxes">
              $
              {cartItems.reduce((acc, item) => {
                acc += item.price * item.quantity * 0.05;
                return acc;
              }, 0)}
            </span>
          </p>
          <p>
            <span>Shipping: </span>
            <span className="cart-total-shipping">${cartItems.length * 5}</span>
          </p>
          <p className="cart-total-amount-container">
            <span>Total: </span>
            <span className="cart-total-amount">
              $
              {cartItems.reduce((acc, item) => {
                acc +=
                  item.price * item.quantity +
                  item.price * item.quantity * 0.05 +
                  5;
                return acc;
              }, 0)}
            </span>
          </p>
        </div>

        <button className="checkout-button">CHECKOUT</button>
      </div>
      {cartItems.map((item, index) => {
        return <CartItem key={`cart-${index}`} item={item} />;
      })}
    </div>
  );
};

export default Cart;
