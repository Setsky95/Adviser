import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { Link } from "react-router-dom";
import "./Review.css";

const Reviews = () => {
  const storedName = localStorage.getItem("userName");
  const [userName, setUserName] = useState(storedName || "");
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalName = userName || nombre;

    if (!finalName.trim() || !comentario.trim()) {
      setMensaje("Por favor completá todos los campos.");
      return;
    }

    try {
      await addDoc(collection(dataBase, "reviews"), {
        nombre: finalName,
        comentario,
        fecha: new Date()
      });
      setMensaje("¡Gracias por tu comentario!");
      setComentario("");
      if (!userName) {
        setNombre("");
      }
    } catch (error) {
      console.error("Error al subir la review:", error);
      setMensaje("Ocurrió un error. Intentá de nuevo.");
    }
  };

  return (
    <div className="review-Container" >
      <h2>{userName ? `${userName}, dejanos tu comentario` : "Dejanos tu comentario"}</h2>
      <form onSubmit={handleSubmit}>
        {!userName && (
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            className="text-review"
        
          />
        )}

        <textarea
          className="text-review "
          name="comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Mensaje"
        />

        <div className="reviewButtons">
          <button type="submit" className="basic-button">
            Enviar
          </button>
          <Link to="/">
            <button type="button" className="basic-button">
              Volver
            </button>
          </Link>
        </div>
      </form>

      {mensaje && <p style={{ marginTop: "10px" }}>{mensaje}</p>}
    </div>
  );
};

export default Reviews;
