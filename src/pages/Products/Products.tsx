import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { AiOutlineShoppingCart, AiFillBulb } from "react-icons/ai";

import { Button, Card, Modal } from "../../components";
import { useProducts } from "../../api/queries";
import { useCart, useTheme } from "../../context";

import { Container } from "./Products.styles";

import Cart from "./Cart";

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toggleTheme } = useTheme();
  const cartState = useCart();

  const { data, isLoading } = useProducts();

  return (
    <Container>
      <header>
        <Button.RoundedWithBadge
          disabled={cartState.state.length < 1 || isLoading}
          onClick={() => {
            setIsModalOpen(true);
          }}
          n={isLoading ? 0 : cartState.totalItems}
        >
          <AiOutlineShoppingCart size={21} />
        </Button.RoundedWithBadge>
        <Button.Rounded onClick={toggleTheme}>
          <AiFillBulb size={21} />
        </Button.Rounded>
      </header>

      <section>
        {isLoading
          ? [1, 2, 3, 4, 5].map((i) => <Skeleton key={i} height="350px" />)
          : data.map((product) => (
              <Card
                key={product.id}
                data={product}
                onAdd={() => cartState.add(product)}
                onDelete={() => cartState.destroy(product)}
                inside_cart={cartState.findQuantity(product.id)}
              />
            ))}
      </section>

      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title="Checkout"
        heigth="700px"
        width="550px"
      >
        <Cart
          cartState={cartState}
          onCartIsEmpty={() => setIsModalOpen(false)}
        />
      </Modal>
    </Container>
  );
}
