import Skeleton from "react-loading-skeleton";
import { AiOutlineShoppingCart, AiFillBulb } from "react-icons/ai";

import { Button, Card } from "../../components";
import { useProducts } from "../../api/queries";
import { useCart, useTheme } from "../../context";

import { Container } from "./Products.styles";

export default function Products() {
  const { toggleTheme } = useTheme();
  const cartState = useCart();

  const { data, isLoading } = useProducts();

  return (
    <Container>
      <header>
        <Button.RoundedWithBadge
          onClick={cartState.actions.toggleIsOpen}
          disabled={cartState.content.length < 1 || isLoading}
          n={isLoading ? 0 : cartState.totalQuantity}
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
                onAdd={() => cartState.actions.add(product)}
                onDelete={() => cartState.actions.remove(product)}
                inside_cart={cartState.countById(product.id)}
              />
            ))}
      </section>
    </Container>
  );
}
