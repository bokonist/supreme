import "../styles/Navigation.css";
import logo from "../assets/supreme-logo.jpg";
import cart_icon from "../assets/shopping-cart.svg";

import { Link } from "react-router-dom";

interface Props {}

const Navigation: React.FC<Props> = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="supreme logo" />
      </Link>
      <img src={cart_icon} className="cart-icon" alt="shopping cart" />
    </div>
  );
};

export default Navigation;
