import "../styles/Navigation.css";
import logo from "../assets/supreme-logo.jpg";
import cart_icon from "../assets/shopping-cart.svg";
import { CartContext } from "../contexts/CartContext";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

interface Props {}

const Navigation: React.FC<Props> = () => {
  const cartItems = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    setTotalItems(
      cartItems.reduce((acc: number, item) => {
        acc += item.quantity;
        return acc;
      }, 0)
    );
  }, [cartItems, totalItems]);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="supreme logo" />
      </Link>
      <div className="cart-details">
        <img src={cart_icon} className="cart-icon" alt="shopping cart" />
        <p className="cart-count">{totalItems ? totalItems : 0}</p>
      </div>
    </div>
  );
};

export default Navigation;
