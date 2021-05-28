import React from "react";
interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

export const CartContext = React.createContext<CartItem[]>(
  (() => {
    let existingData: CartItem[] = [];
    let localData = localStorage.getItem("supremeCartData");
    if (localData) {
      existingData = JSON.parse(localData);
    }
    return existingData;
  })()
);
