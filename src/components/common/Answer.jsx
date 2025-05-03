import React from "react";
import "./common.css";
const Answer = ({
  contador1,
  setContador1,
  contadorQuestion,
  setcontadorQuestion,
}) => {
  function contadorSuma() {
    setContador1(contador1 + 10);
    setcontadorQuestion(contadorQuestion + 1);
    console.log(`PREGUNTA N`, contadorQuestion);
  }

  function contadorResta() {
    setContador1(contador1 - 10);
    setcontadorQuestion(contadorQuestion + 1);
    console.log(`PREGUNTA N`, contadorQuestion);
  }

  function contadorActualiza() {
    setContador1(contador1 + 1);
    setcontadorQuestion(contadorQuestion + 1);
    console.log(`PREGUNTA N`, contadorQuestion);
  }

  return (
    <div className="answer-container">
      <div className="child">
        <button className="button-answer" onClick={contadorSuma}>
          Sí
        </button>
      </div>
      <div className="child">
        <button className="button-answer" onClick={contadorResta}>
          No
        </button>
      </div>
      <div className="child">
        <button className="button-answer" onClick={contadorActualiza}>
          No sé
        </button>
      </div>
    </div>
  );
};

export default Answer;
