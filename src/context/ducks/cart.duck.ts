import produce from "immer";

import { Action, ProductInCart, Product } from "../../types";

export const Types = {
  ADD: "@cart/ADD",
  RM: "@cart/RM",
  RESET: "@cart/RESET",
};

export const Selectors = {
  inside_cart: (state: ProductInCart[], id: number) =>
    state.find((p) => p.data.id === id)?.quantity || 0,
  total_items: (state: ProductInCart[]) =>
    state.reduce((acc, cur) => acc + cur.quantity, 0),
  total_price: (state: ProductInCart[]) =>
    state.reduce((acc, cur) => acc + cur.quantity * cur.data.price, 0),
};

export const Creators = {
  addItem: (payload: Product) => ({ type: Types.ADD, payload }),
  rmItem: (payload: Product) => ({ type: Types.RM, payload }),
  reset: () => ({ type: Types.RESET, payload: null }),
};

export const INITIAL_STATE = [];

export default function reducer(
  state: ProductInCart[] = INITIAL_STATE,
  action: Action
) {
  switch (action.type) {
    case Types.ADD:
      return produce(state, (draft) => {
        const in_cart_index = state.findIndex(
          (p) => p.data.id === action.payload.id
        );

        if (in_cart_index !== -1) {
          draft[in_cart_index].quantity += 1;

          return draft;
        }

        draft.push({ quantity: 1, data: action.payload });

        return draft;
      });
    case Types.RM:
      return produce(state, (draft) => {
        const in_cart_index = state.findIndex(
          (p) => p.data.id === action.payload.id
        );

        if (in_cart_index !== -1) {
          if (draft[in_cart_index].quantity <= 1) {
            return draft.filter(
              (p) => p.data.id !== draft[in_cart_index].data.id
            );
          }

          draft[in_cart_index].quantity -= 1;

          return draft;
        }

        return draft;
      });

    case Types.RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
}
