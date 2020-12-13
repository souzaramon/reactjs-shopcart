export type Product = {
  id: string | number;
  price: number;
  display_text: string;
  url_thumbnail: string;
};

export type ProductInCart = {
  data: Product;
  quantity: number;
};

export type StateCart = ProductInCart[];

export type Action = {
  type: string;
  payload: any;
};
