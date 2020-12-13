import { useEffect } from "react";
import { toast } from "react-toastify";

import { Button } from "../../../components";
import { CartContextData } from "../../../context";

import { Container } from "./Cart.styles";

type Props = {
  cartState: CartContextData;
  onCartIsEmpty?: any;
};

export default function Cart(props: Props) {
  const { cartState, onCartIsEmpty = () => {} } = props;

  useEffect(() => {
    if (cartState.state.length < 1) {
      onCartIsEmpty();
    }
  }, [cartState.state, onCartIsEmpty]);

  function handlePretentToBuy() {
    if (window.confirm("Are u sure?")) {
      cartState.reset();

      toast.success("🚀 Thanks! Be sure to check back often!");
    }
  }

  return (
    <Container>
      <ul>
        {cartState.state.map(({ data, quantity }) => (
          <li key={data.id}>
            <img src={data.url_thumbnail} alt="thumbnail" />
            <span>{data.display_text}</span>
            <div>
              <span>
                {quantity} x{" "}
                {data.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
              <Button.Rounded onClick={() => cartState.add(data)}>
                +
              </Button.Rounded>
              <Button.Rounded onClick={() => cartState.destroy(data)}>
                -
              </Button.Rounded>
            </div>
          </li>
        ))}
      </ul>
      <footer>
        <h2>
          Total{" "}
          {cartState.totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h2>

        <Button.Outlined
          disabled={cartState.state.length < 1}
          onClick={handlePretentToBuy}
        >
          Pretend to buy
        </Button.Outlined>
      </footer>
    </Container>
  );
}
