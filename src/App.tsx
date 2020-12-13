import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProviderCart, ProviderTheme } from "./context";
import { Products, Cart } from "./pages";

export default function App() {
  return (
    <ProviderTheme>
      <ProviderCart>
        <Products />
        <Cart />
        <ToastContainer />
      </ProviderCart>
    </ProviderTheme>
  );
}
