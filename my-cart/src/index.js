import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./Cart-Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
  rootElement
);
