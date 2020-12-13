import { createContext, useContext, useReducer } from "react";
import produce from "immer";

import { Cart, Action, CartContent } from "../types";

export interface CartContextData {
  actions: {
    add: any;
    remove: any;
    reset: any;
    toggleIsOpen: any;
  };
  content: CartContent;
  totalPrice: number;
  totalQuantity: number;
  isOpen: boolean;
  countById: any;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const INITIAL_STATE: Cart = {
  content: [],
  isOpen: false,
};

export const ProviderCart = ({ children }: any) => {
  const [state, dispatch] = useReducer((state: Cart, action: Action) => {
    return produce(state, (draft) => {
      const inside_cart = action?.payload?.id
        ? draft.content.find((i) => i.data.id === action.payload.id)
        : null;

      switch (action.type) {
        case "ADD":
          if (inside_cart) {
            inside_cart.quantity += 1;
            break;
          }

          draft.content.push({ quantity: 1, data: action.payload });
          break;

        case "RM":
          if (inside_cart) {
            inside_cart.quantity -= 1;

            if (inside_cart.quantity <= 0) {
              draft.content = draft.content.filter(
                (i) => i.data.id !== inside_cart.data.id
              );
            }
          }
          break;

        case "RESET":
          draft = INITIAL_STATE;
          break;

        case "TOGGLE_ISOPEN":
          draft.isOpen = !draft.isOpen;
          break;
      }

      return draft;
    });
  }, INITIAL_STATE);

  const isOpen = state.isOpen;
  const content = state.content;
  const countById = (id: any) => content.find((p) => p.data.id === id)?.quantity || 0;
  const totalPrice = content.reduce((acc, cur) => acc + cur.quantity * cur.data.price, 0);
  const totalQuantity = content.reduce((acc, cur) => acc + cur.quantity, 0);

  const add = (payload: any) => dispatch({ type: "ADD", payload });
  const remove = (payload: any) => dispatch({ type: "RM", payload });
  const reset = (payload: any) => dispatch({ type: "RESET", payload });
  const toggleIsOpen = (payload: any) => dispatch({ type: "TOGGLE_ISOPEN", payload });

  return (
    <CartContext.Provider
      value={{
        content,
        isOpen,
        totalPrice,
        totalQuantity,
        countById,
        actions: {
          add,
          remove,
          reset,
          toggleIsOpen,
        },
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
