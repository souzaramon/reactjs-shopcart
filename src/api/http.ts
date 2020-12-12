import { products as data } from "../constants";

import { Product } from "../types";

const MOCK = {
  get: (): Promise<Array<Product>> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2 * 1000);
    }),
};

export default MOCK;
