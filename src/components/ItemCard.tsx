import { useContext, useEffect, useState } from "react";
import "../styles/ItemCard.css";
import loadingGIF from "../assets/loading.gif";
import { CartContext } from "../contexts/CartContext";
import { CartUpdaterContext } from "./Shop";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}
interface Props {
  details: Product;
}

const ItemCard: React.FC<Props> = (props) => {
  const { details } = props;
  const cartDetails = useContext(CartContext);
  const CartDispatch: any = useContext(CartUpdaterContext);
  const [image, setImage] = useState<null | string>(null);
  const [quantity, setQuantity] = useState(() => {
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
  });
  useEffect(() => {
    setQuantity(() => {
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
    });
  }, [cartDetails, details.id]);
  useEffect(() => {
    import(`../assets/items/${details.image}`).then((imageData) => {
      setImage(imageData.default);
    });
  }, [details.image]);
  return (
    <div className="card">
      <Link to={`/shop/item/${details.id}`}>
        <img
          className="card-image"
          src={image || loadingGIF}
          alt={details.name}
        ></img>
      </Link>

      <p className="card-name">{details.name}</p>
      <p className="card-price">
        <span>${details.price}</span>
        {quantity ? (
          <span>
            <span> x{quantity}</span>
            <span className="card-calculated-price">
              {" $"}
              {quantity * details.price}
            </span>
          </span>
        ) : null}
      </p>
      <div className="cart-actions">
        {quantity > 0 ? (
          <div className="quantity-adjustor">
            <button
              className="decrement-button"
              onClick={() => {
                CartDispatch({ type: "remove", item: details });
              }}
            >
              -
            </button>
            <p className="item-quantity">{quantity}</p>
            <button
              className="increment-button"
              onClick={() => {
                CartDispatch({ type: "add", item: details });
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="add-to-cart"
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
