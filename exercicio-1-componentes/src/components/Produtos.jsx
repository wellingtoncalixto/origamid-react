import React from "react";
import "./components-style.css";

const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <>
      <h1 className="title">Produtos</h1>
      <ul className="produto-list">
        {produtos.map((produto) => (
          <li className="produto">
            <p>{produto.nome}</p>
            <ul>
              {produto.propriedades.map((propriedade) => (
                <li>{propriedade}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Produtos;
