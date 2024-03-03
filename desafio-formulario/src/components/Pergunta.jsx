import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const Pergunta = ({ question, index }) => {
  const { step, setRespostas } = React.useContext(GlobalContext);
  const { pergunta, options } = question;
  const [value, setValue] = React.useState();

  function onChange({ target }) {
    setValue(target.value);
    setRespostas((respostas) => [...respostas, target.value]);
  }

  useEffect(() => {
    if (step === 1) {
      setValue();
    }
  }, [step]);

  if (step !== index) return null;
  return (
    <>
      <fieldset
        style={{
          padding: "2rem",
          marginBottom: "1rem",
          border: "2px solid #eee",
        }}
      >
        <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </>
  );
};

export default Pergunta;
