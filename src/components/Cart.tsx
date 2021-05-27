import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/Cart.css";
import CartItem from "./CartItem";

interface Props {}

const Cart: React.FC<Props> = () => {
  let cartItems = useContext(CartContext);
  return (
    <div className="cart-container">
      {cartItems.map((item, index) => {
        return <CartItem key={`cart-${index}`} item={item} />;
      })}
    </div>
  );
};

export default Cart;
