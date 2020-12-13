import { Product } from "../types";

const httpMock = {
  get: (_uri: string): Promise<Array<Product>> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          [5, 2, 4, 3, 1].map((i) => ({
            id: i,
            display_text: `Model ${i} - tshirt`,
            price: 12.25 * Number(`1.${i}`),
            url_thumbnail: process.env.PUBLIC_URL + `/assets/${i}.jpeg`,
          }))
        );
      }, 2 * 1000);
    }),
};

export default httpMock;
