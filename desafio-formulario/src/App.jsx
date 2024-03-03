import React from "react";
import Pergunta from "./components/Pergunta";
import { GlobalContext } from "./context/GlobalContext";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nstep?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [resultado, setResultado] = React.useState();
  const { step, setStep, respostas, setRespostas, resetQuestionary } =
    React.useContext(GlobalContext);

  function tentarNovamente() {
    resetQuestionary();
    setResultado();
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({ resposta }) =>
      respostas.includes(resposta)
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (step < perguntas.length) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
      resultadoFinal();
    }
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Pergunta key={pergunta.id} question={pergunta} index={index + 1} />
        ))}
      </form>
      {resultado ? (
        <>
          <h1>{resultado}</h1>
          <button onClick={tentarNovamente}>Tentar Novamente</button>
        </>
      ) : (
        <button
          type="submit"
          disabled={respostas.length + 1 === step ? true : false}
          onClick={handleClick}
        >
          {step < perguntas.length - 1 ? "Proxima" : "Enviar"}
        </button>
      )}
    </>
  );
};

export default App;
