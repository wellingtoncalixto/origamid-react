import React from "react";
import Produto from "./Produto";
import "./style.css";
const App = () => {
  const [dados, setDados] = React.useState(null);

  async function handleClick(produto) {
    const { status, body } = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`
    )
      .then(async (response) => {
        return {
          status: response.status,
          body: await response.json(),
        };
      })
      .catch(async (error) => {
        return {
          status: error.status,
          body: await error.json(),
        };
      });

    if (status == 200) {
      setDados(body);
      console.log(dados);
    }
  }

  return (
    <div>
      <button onClick={() => handleClick("tablet")}>Tablet</button>
      <button onClick={() => handleClick("smartphone")}>Smartphone</button>
      <button onClick={() => handleClick("notebook")}>Notebook</button>
      {dados ? <Produto produto={dados} /> : <></>}
    </div>
  );
};

export default App;
