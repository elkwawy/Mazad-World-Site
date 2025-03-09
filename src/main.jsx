import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Languages/i18n.js";
import { UserProvider } from "./context/UserProvider";
import { Provider } from "react-redux";
import store from "@/redux/store";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </BrowserRouter>
  // </StrictMode>
);
