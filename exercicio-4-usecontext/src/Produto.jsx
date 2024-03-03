import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const { produtos, limparProdutos } = React.useContext(GlobalContext);

  if (produtos === null) return null;
  return (
    <>
      {produtos.map((produto, index) => {
        return (
          <div key={index}>
            <h1>{produto.nome}</h1>
            <h2>R$ {produto.preco}</h2>
          </div>
        );
      })}
      
    </>
  );
};

export default Produto;
