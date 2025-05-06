import {  useRef } from "react";import "./common.css";


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

  const audioRef = useRef(null);

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log("Error reproduciendo sonido:", err);
      });
    }
  };

  return (
    <div className="answer-container">
      <audio ref={audioRef} src="src\music\hover.mp3" />
      <div className="child">
        <button
          className="button-answer"
          onMouseEnter={handleHover}
          onClick={contadorSuma}
        >
          Sí
        </button>
      </div>
      <div className="child">
        <button
          className="button-answer"
          onMouseEnter={handleHover}
          onClick={contadorResta}
        >
          No
        </button>
      </div>
      <div className="child">
        <button
          className="button-answer"
          onMouseEnter={handleHover}
          onClick={contadorActualiza}
        >
          No sé
        </button>
      </div>
    </div>
  );
};

export default Answer;
