import { createContext, useContext, useEffect, useReducer } from "react";

import { Product, ProductInCart } from "../types";

import cartDuck, { Creators, Selectors } from "./ducks/cart.duck";

export interface CartContextData {
  state: ProductInCart[];
  add: any;
  destroy: any;
  reset: any;
  findQuantity: any;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const ProviderCart = ({ children }: any) => {
  const lsCart = localStorage.getItem("@reactjs-cartshop");
  const INITIAL_STATE = lsCart ? JSON.parse(lsCart) : [];

  const [state, dispatch] = useReducer(cartDuck, INITIAL_STATE);

  function add(payload: Product) {
    return dispatch(Creators.addItem(payload));
  }

  function destroy(payload: Product) {
    return dispatch(Creators.rmItem(payload));
  }

  function findQuantity(id: number) {
    return Selectors.inside_cart(state, id);
  }

  function reset() {
    return dispatch(Creators.reset());
  }

  useEffect(() => {
    localStorage.setItem("@reactjs-cartshop", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        state,
        add,
        destroy,
        reset,
        findQuantity,
        totalItems: Selectors.total_items(state),
        totalPrice: Selectors.total_price(state),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
