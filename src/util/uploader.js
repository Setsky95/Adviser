import { collection, doc, setDoc } from "firebase/firestore";
import { dataBase } from "../firebaseConfig"; 

const workQuestions = [
]






  ;

const uploadQuestions = async () => {
  const workRef = collection(dataBase, "badFamilyAdvice");

  for (let i = 0; i < workQuestions.length; i++) {
    const question = workQuestions[i];
    await setDoc(doc(workRef, String(question.id)), question);
  }

  console.log("Preguntas subidas correctamente a la colección 'work'");
};

export default uploadQuestions;
