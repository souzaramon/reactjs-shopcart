import { toast } from "react-toastify";

import { Button, Modal } from "../../components";
import { useCart } from "../../context";

import { Container } from "./Cart.styles";

export default function Cart() {
  const cartState = useCart();

  function handlePretentToBuy() {
    cartState.actions.reset();

    toast.success("🚀 Thanks! Be sure to check back often!");
  }

  return (
    <Modal
      isOpen={cartState.isOpen}
      setIsOpen={cartState.actions.toggleIsOpen}
      title="Checkout"
      heigth="700px"
      width="550px"
    >
      <Container>
        <ul>
          {cartState.content.map(({ data, quantity }) => (
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
                <Button.Rounded onClick={() => cartState.actions.add(data)}>
                  +
                </Button.Rounded>
                <Button.Rounded onClick={() => cartState.actions.remove(data)}>
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
            disabled={cartState.content.length < 1}
            onClick={handlePretentToBuy}
          >
            Pretend to buy
          </Button.Outlined>
        </footer>
      </Container>
    </Modal>
  );
}
