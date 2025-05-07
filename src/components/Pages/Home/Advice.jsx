import { useEffect, useState } from "react";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import Loader from "../../common/Loader";
import "./Advice.css";
import { Link } from "react-router-dom";
const Advice = ({ contador1, category }) => {
  const [advice, setAdvice] = useState(null);

useEffect(() => {
  const fetchAdvice = async () => {
    if (!category) return;
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const base = contador1 < 20 ? "bad" : "good";
    const collectionName = `${base}${capitalize(category)}Advice`; // ejemplo: badLoveAdvice

    const ref = collection(dataBase, collectionName);
    const snapshot = await getDocs(ref);
    const docs = snapshot.docs;
    const randomIndex = Math.floor(Math.random() * Math.min(5, docs.length));
    const selectedAdvice = docs[randomIndex].data();
    setAdvice(selectedAdvice);


  };

  fetchAdvice();
}, [contador1, category]);



  
  return advice ? (
    <div className="advice-container">
      <h1 className="text-answer-title">{advice.adviceTitle}</h1>
      <h2 className="text-answer">{advice.adviceText}</h2>
    
    <Link to="/">
      <button className="basic-button">volver</button>
      </Link>
      <Link to="/Rev">
      <button className="basic-button">review</button>
      </Link>
    </div>
  ) : (
    <Loader />
  );
}
export default Advice;
