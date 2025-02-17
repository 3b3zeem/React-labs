import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterContextProvider from "./components/Context/CounterContext.jsx";
import TokenContextProvider from "./components/Context/TokenContext.jsx";
import { CartProvider } from "./components/Context/CartContext.jsx";
import { Provider } from "react-redux";
import myStore from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myStore}>
      <CounterContextProvider>
        <TokenContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </TokenContextProvider>
      </CounterContextProvider>
    </Provider>
  </StrictMode>
);
