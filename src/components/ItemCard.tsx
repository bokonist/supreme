import { useContext, useEffect, useState } from "react";
import "../styles/ItemCard.css";
import loadingGIF from "../assets/loading.gif";
import { CartContext } from "../contexts/CartContext";
import { CartUpdaterContext } from "./App";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}
interface Props {
  details: Product;
}

const ItemCard: React.FC<Props> = (props) => {
  const { details } = props;
  const cartDetails = useContext(CartContext);
  const CartDispatch: any = useContext(CartUpdaterContext);
  const [image, setImage] = useState<null | string>(null);
  const getItemQuantity = (id: string) => {
    let item = cartDetails.filter((item) => {
      if (item.id === details.id) {
        return true;
      } else return false;
    });
    if (item.length) {
      return item[0].quantity;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    import(`../assets/items/${details.image}`).then((imageData) => {
      setImage(imageData.default);
    });
  }, [details.image]);
  return (
    <div className="card">
      <img
        className="card-image"
        src={image || loadingGIF}
        alt={details.name}
      ></img>
      <p className="card-name">{details.name}</p>
      <div className="cart-actions">
        {getItemQuantity(details.id) > 0 ? (
          <div>
            <button
              className="increment-button"
              onClick={() => {
                CartDispatch({ type: "add", item: details });
              }}
            >
              +
            </button>
            <p className="item-quantity">{getItemQuantity(details.id)}</p>
            <button
              className="decrement-button"
              onClick={() => {
                CartDispatch({ type: "remove", item: details });
              }}
            >
              -
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              CartDispatch({ type: "add", item: details });
            }}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
