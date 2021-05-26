import React from "react";
interface CartItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

export const CartContext = React.createContext<CartItem[]>([]);
