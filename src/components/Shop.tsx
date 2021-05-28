import "../styles/Shop.css";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import ItemDetail from "./ItemDetail";
import Cart from "./Cart";
import ItemGallery from "./ItemGallery";
import { Page404 } from "../components/utility-components/Page404";
import { Switch, Route } from "react-router-dom";
import React, { useCallback, useContext, useReducer } from "react";
import { CartContext } from "../contexts/CartContext";
import { InventoryContext } from "../contexts/InventoryContext";
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
}

interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface CartAction {
  type: string;
  item: Product;
}

function CartReducer(currentCart: CartItem[], action: CartAction) {
  //console.log(action.type, action.item.id);
  //return [{ id: 'sada',    name: "s",image: "sdas",quantity: 1,    price: 2}]
  let cartClone: CartItem[];
  switch (action.type) {
    case "add":
      cartClone = [...currentCart];
      let found = false;
      cartClone.forEach((item, index) => {
        if (item.id === action.item.id) {
          cartClone[index].quantity++;
          found = true;
        }
      });
      if (!found) {
        cartClone.push({
          id: action.item.id,
          name: action.item.name,
          image: action.item.image,
          quantity: 1,
          price: action.item.price,
        });
      }
      localStorage.setItem("supremeCartData", JSON.stringify(cartClone));
      return cartClone;
    case "remove":
      cartClone = [...currentCart];
      cartClone.forEach((item, index) => {
        if (item.id === action.item.id) {
          if (cartClone[index].quantity !== 0) {
            cartClone[index].quantity--;
          }
          if (cartClone[index].quantity === 0) {
            cartClone.splice(index, 1);
          }
        }
      });
      localStorage.setItem("supremeCartData", JSON.stringify(cartClone));
      return cartClone;
    default:
      throw new Error();
  }
}

export const CartUpdaterContext: any = React.createContext(null);

interface Props {}
const Shop: React.FC<Props> = () => {
  let items = useContext(InventoryContext);
  const [cartItems, CartDispatch] = useReducer(
    useCallback(CartReducer, []),
    useContext(CartContext)
  );
  return (
    <InventoryContext.Provider value={items}>
      <CartContext.Provider value={cartItems}>
        <CartUpdaterContext.Provider value={CartDispatch}>
          <Navigation />
          <Sidebar />
          <div className="main-body-container">
            <Switch>
              <Route exact path="/shop/item/:id">
                <ItemDetail />
              </Route>
              <Route exact path="/shop/cart">
                <Cart />
              </Route>
              <Route exact path="/shop/category/:categoryName">
                <ItemGallery display="filter" />
              </Route>
              <Route exact path="/shop">
                <ItemGallery display="all" />
              </Route>
              <Route path="/">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </CartUpdaterContext.Provider>
      </CartContext.Provider>
    </InventoryContext.Provider>
  );
};

export default Shop;
