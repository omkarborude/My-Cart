import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems , setcartItems] = useState([]);
  return (
    <CartContext.Provider value={{ cartItems , setcartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart (){
    return useContext(CartContext);
}