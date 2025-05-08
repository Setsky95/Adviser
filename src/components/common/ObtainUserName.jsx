import React, { useState } from "react";
import "./common.css";

const ObtainUserName = ({ setUserName }) => {
  const [inputValue, setInputValue] = useState("");

  console.log("setUserName recibido:", setUserName);

  return (
<div>
  <h1 className="text-answer-title" >¿Podrías decirme tu nombre?</h1>
  <form onSubmit={(e) => e.preventDefault()}>
    <input
      type="text"
      name="nombre"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
     className="input-name"
    />
    <div >
      <button
        className="basic-button"
        type="submit"
        onClick={() => {
          localStorage.setItem("userName", inputValue);
          setUserName(inputValue);
        }}
      >
        Aceptar
      </button>
    </div>
  </form>
</div>

  );
};

export default ObtainUserName;
