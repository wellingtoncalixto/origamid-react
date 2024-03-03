import React from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setDados(json);
        })
        .catch((error) => {
          console.log({
            status: error.status,
            body: Error(error),
          });
        });
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <h2>R$ {dados.preco}</h2>
    </div>
  );
};

export default Produto;
