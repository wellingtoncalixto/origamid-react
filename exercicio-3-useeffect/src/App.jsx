import React from "react";
import Produto from "./Produto";
import "./style.css";
const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const preferencia = window.localStorage.getItem("preferencia");
    if (preferencia !== "null") {
      setProduto(preferencia);
    }
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("preferencia", produto);
  }, [produto]);

  function handleClick(produto) {
    setProduto(produto);
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button onClick={() => handleClick("tablet")}>Tablet</button>
      <button onClick={() => handleClick("smartphone")}>Smartphone</button>
      <button onClick={() => handleClick("notebook")}>Notebook</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
