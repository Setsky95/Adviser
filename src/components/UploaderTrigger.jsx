import { useEffect } from "react";
import uploadQuestions from "../util/uploader";

const UploadTrigger = () => {
  useEffect(() => {
    uploadQuestions();
  }, []);

  return <div>Subiendo preguntas a Firebase...</div>;
};

export default UploadTrigger;
