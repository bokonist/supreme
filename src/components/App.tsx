import React, { useContext, useReducer, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";
import { InventoryContext } from "../contexts/InventoryContext";
import ThemeSwitcher from "./utility-components/ThemeSwitcher";
import "../styles/App.css";
import { Routes } from "../routes/Routes";

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
  //console.log(action.type, action.id);
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
      return cartClone;
    case "remove":
      cartClone = [...currentCart];
      cartClone.forEach((item, index) => {
        if (item.id === action.item.id) {
          if (cartClone[index].quantity !== 0) cartClone[index].quantity--;
        }
      });
      return cartClone;
    default:
      throw new Error();
  }
}
export const CartUpdaterContext: any = React.createContext(null);

function App() {
  let [theme, setTheme] = useState(true);
  let items = useContext(InventoryContext);
  const [cartItems, CartDispatch] = useReducer(
    CartReducer,
    useContext(CartContext)
  );
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <InventoryContext.Provider value={items}>
        <CartContext.Provider value={cartItems}>
          <CartUpdaterContext.Provider value={CartDispatch}>
            <ThemeSwitcher toggleTheme={toggleTheme} />
            <div className={"App" + (theme ? "-dark" : "-light")}>
              <Routes />
            </div>
          </CartUpdaterContext.Provider>
        </CartContext.Provider>
      </InventoryContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
