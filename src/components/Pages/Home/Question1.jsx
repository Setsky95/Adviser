import { useContext, useEffect, useState } from "react";
import { CounterContext } from "../../../context/CounterContext";
import { dataBase } from "../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // <--- no te olvides esto
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/system/Unstable_Grid';
import Advice from "./Advice";
import "./Question.css";
import Answer from "../../common/Answer";
import Loader from "../../common/Loader";


const Question1 = () => {
  const { category } = useContext(CounterContext);
  const [question, setQuestion] = useState([]);
  const [randomID, setRandomID] = useState(null);
  
  const [contador1, setContador1] = useState(0);
  const [contadorQuestion, setcontadorQuestion] = useState(2);
  const navigate = useNavigate(); // inicializamos navigate



  useEffect(() => {
    if (!category) {
      navigate("/");
      return;
    }
  
    const ref = collection(dataBase, category);
    getDocs(ref).then(res => {
      const docs = res.docs;
      const randomIndex = Math.floor(Math.random() * docs.length);
      setQuestion(docs[randomIndex].data());
    });
  }, [category, contadorQuestion]);




  return contadorQuestion > 5 ? (
    <Advice contador1={contador1} category={category}/>
  ) : (
    question.length === 0 ? (
      <>
   <Loader/>
      </>
    ) : (
      <div className="screen-container">
        <div className="left-side">
          <h1 key={question.question} className="text-question">{question.question}</h1>
        </div>
        <div className="right-side">
          <Answer
            contador1={contador1}
            setContador1={setContador1}
            contadorQuestion={contadorQuestion}
            setcontadorQuestion={setcontadorQuestion}
          />
        </div>
      </div>
    )
  );
}

export default Question1;
