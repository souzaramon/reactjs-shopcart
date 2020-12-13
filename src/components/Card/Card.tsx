import Button from "../Button";
import { Product } from "../../types";

import { Container } from "./Card.styles";

type Props = {
  data: Product;
  inside_cart?: number;
  onAdd?: any;
  onDelete?: any;
};

export default function Card(props: Props) {
  const {
    data,
    inside_cart = 0,
    onAdd = () => {},
    onDelete = () => {},
  } = props;

  return (
    <Container>
      <img src={data.url_thumbnail} alt={data.display_text} />

      <footer>
        <h3>{data.display_text}</h3>
        <h4>
          {data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h4>

        <div>
          <span>{inside_cart > 0 ? `${inside_cart} added` : ""}</span>

          <Button.Rounded onClick={onAdd}>+</Button.Rounded>
          <Button.Rounded disabled={!inside_cart} onClick={onDelete}>
            -
          </Button.Rounded>
        </div>
      </footer>
    </Container>
  );
}
