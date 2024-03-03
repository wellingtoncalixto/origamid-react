import React from "react";
import Produto from "./Produto";
import "./style.css";
import { GlobalStorage } from "./GlobalContext";
import Limpar from "./Limpar";
const App = () => {
  return (
    <div>
      <GlobalStorage>
        <Produto />
        <Limpar />
      </GlobalStorage>
    </div>
  );
};

export default App;
