import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [respostas, setRespostas] = React.useState([]);
  const [step, setStep] = React.useState(1);

  function resetQuestionary() {
    setStep(1);
    setRespostas([]);
  }

  return (
    <GlobalContext.Provider
      value={{ respostas, setRespostas, step, setStep, resetQuestionary }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
