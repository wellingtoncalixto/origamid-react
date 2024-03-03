import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { GlobalStorage } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStorage>
    <App />
  </GlobalStorage>
);
