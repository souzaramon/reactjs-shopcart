export type Product = {
  id: string | number;
  price: number;
  display_text: string;
  url_thumbnail: string;
};

export type CartContent = {
  data: Product;
  quantity: number;
}[];

export type Cart = {
  content: CartContent;
  isOpen: boolean;
};

export type Action = {
  type: string;
  payload: any;
};
