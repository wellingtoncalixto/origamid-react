import React from "react";
import { GlobalContext } from "./GlobalContext";

const Limpar = () => {
  const { limparProdutos } = React.useContext(GlobalContext);

  return <button onClick={() => limparProdutos()}>Limpar Produtos</button>;
};

export default Limpar;
