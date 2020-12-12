import Skeleton from "react-loading-skeleton";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Badge, Button, Card } from "../../components";
import { useProducts } from "../../api/queries";

import { Container } from "./Products.styles";

export default function Products() {
  const { data, isLoading } = useProducts();

  return (
    <Container>
      <header>
        <Button.Empty>
          <AiOutlineShoppingCart size={24} />
          <span>Open Cart</span>

          <Badge>22</Badge>
        </Button.Empty>
      </header>

      <section>
        {isLoading
          ? [1, 2, 3, 4, 5].map((i) => <Skeleton key={i} height="350px" />)
          : data.map((product) => <Card key={product.id} data={product} />)}
      </section>
    </Container>
  );
}
