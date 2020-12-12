import Button from "../Button";
import { Product } from "../../types";

import { Container } from "./Card.styles";

type Props = {
  data: Product;
};

export default function Card(props: Props) {
  const { data } = props;

  return (
    <Container>
      <img src={data.url_thumbnail} alt={`Picture of ${data.display_text}`} />

      <footer>
        <h3>{data.display_text}</h3>
        <h4>
          {data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h4>

        <Button.Outlined>Buy</Button.Outlined>
      </footer>
    </Container>
  );
}
