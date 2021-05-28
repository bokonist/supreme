import { useContext, useEffect, useState } from "react";
import "../styles/CartItem.css";
import loadingGIF from "../assets/loading.gif";
import { CartUpdaterContext } from "./Shop";

interface CartItemType {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = (props) => {
  const { item } = props;
  const CartDispatch: any = useContext(CartUpdaterContext);
  const [image, setImage] = useState<null | string>(null);
  useEffect(() => {
    import(`../assets/items/${item.image}`).then((imageData) => {
      setImage(imageData.default);
    });
  }, [item.image]);
  return (
    <div className="cart-item">
      <img
        src={image || loadingGIF}
        alt={item.name}
        className="cart-item-image"
      ></img>
      <div className="cart-item-group1">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">
          <span>${item.price}</span>
          {item.quantity ? (
            <span>
              <span> x{item.quantity}</span>
              <span className="cart-item-calculated-price">
                {" $"}
                {item.quantity * item.price}
              </span>
            </span>
          ) : null}
        </p>
        <div className="cart-item-actions">
          {item.quantity > 0 ? (
            <div className="cart-item-quantity-adjustor">
              <button
                className="cart-item-decrement-button"
                onClick={() => {
                  CartDispatch({ type: "remove", item: item });
                }}
              >
                -
              </button>
              <p className="cart-item-quantity">{item.quantity}</p>
              <button
                className="cart-item-increment-button"
                onClick={() => {
                  CartDispatch({ type: "add", item: item });
                }}
              >
                +
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="cart-calculations">
        <span>
          <span>Tax(5%) : </span>
          <span className="cart-item-taxes">
            ${item.price * item.quantity * 0.05}
          </span>
        </span>
        <span>
          <span>Shipping : </span>
          <span className="cart-item-shipping">{"$5.00"}</span>
        </span>
        <span>
          <span>Item total : </span>
          <span className="cart-item-total">
            $
            {item.price * item.quantity + item.price * item.quantity * 0.05 + 5}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
