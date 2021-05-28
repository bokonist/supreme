import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { InventoryContext } from "../contexts/InventoryContext";
import loadingGIF from "../assets/loading.gif";
import "../styles/ItemDetail.css";
import { CartContext } from "../contexts/CartContext";
import { CartUpdaterContext } from "./Shop";
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}
interface ParamTypes {
  id: string;
}
interface Props {}

const ItemDetail: React.FC<Props> = () => {
  const { id } = useParams<ParamTypes>();
  const items = useContext(InventoryContext);
  const cartDetails = useContext(CartContext);
  const CartDispatch: any = useContext(CartUpdaterContext);
  const [image, setImage] = useState<null | string>(null);
  const [item, setItem] = useState<null | Product>(null);

  const history = useHistory();
  const [quantity, setQuantity] = useState(() => {
    let item = cartDetails.filter((item) => {
      if (item.id === id) {
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
    let found: Boolean = false;
    for (let i = 0; i < items.length; i++) {
      if (id === items[i].id) {
        setItem(items[i]);
        found = true;
        break;
      }
    }
    if (!found) {
      history.push("/shop");
    }
  }, [id, items, history]);
  useEffect(() => {
    if (item)
      import(`../assets/items/${item.image}`).then((imageData) => {
        setImage(imageData.default);
      });
  }, [item]);
  useEffect(() => {
    setQuantity(() => {
      let item = cartDetails.filter((item) => {
        if (item.id === id) {
          return true;
        } else return false;
      });
      if (item.length) {
        return item[0].quantity;
      } else {
        return 0;
      }
    });
  }, [cartDetails, id]);
  return (
    <div className="item-detail-container">
      <img src={image || loadingGIF} alt={item?.name} />
      <p className="item-detail-name">{item?.name}</p>
      <p className="item-detail-description">{item?.description}</p>
      <p className="item-detail-price">
        <span>${item?.price}</span>
        {quantity ? (
          <span>
            <span> x{quantity}</span>
            <span className="item-detail-calculated-price">
              {" $"}
              {item?.price ? quantity * item.price : 0}
            </span>
          </span>
        ) : null}
      </p>
      <div className="item-detail-cart-actions">
        {quantity > 0 ? (
          <div className="item-detail-quantity-adjustor">
            <button
              className="item-detail-decrement-button"
              onClick={() => {
                CartDispatch({ type: "remove", item: item });
              }}
            >
              -
            </button>
            <p className="item-detail-item-quantity">{quantity}</p>
            <button
              className="item-detail-increment-button"
              onClick={() => {
                CartDispatch({ type: "add", item: item });
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="item-detail-add-to-cart"
            onClick={() => {
              CartDispatch({ type: "add", item: item });
            }}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
