import { useQuery } from "react-query";

import http from "../http";

export default function useProducts() {
  const { data = [], isLoading } = useQuery("products", http.get);

  return { data, isLoading };
}
