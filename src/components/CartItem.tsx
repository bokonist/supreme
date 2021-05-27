import { useContext, useEffect, useState } from "react";
import "../styles/ItemCard.css";
import loadingGIF from "../assets/loading.gif";
import { CartUpdaterContext } from "./App";

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
      <img src={image || loadingGIF} alt={item.name}></img>
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
  );
};

export default CartItem;
