import Skeleton from "react-loading-skeleton";

import { Card } from "../../components";
import { useProducts } from "../../api/queries";

import { Container } from "./Products.styles";

export default function Products() {
  const { data, isLoading } = useProducts();

  console.log(data);

  return (
    <Container>
      <section>
        {isLoading
          ? [1, 2, 3, 4, 5].map((i) => <Skeleton key={i} height="350px" />)
          : data.map((product) => <Card key={product.id} data={product} />)}
      </section>
    </Container>
  );
}
