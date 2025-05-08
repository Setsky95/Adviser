import { useEffect, useState } from "react";
import "./common.css";

const WebLoader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Arranca el fade después de 1 segundo
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`web-loader ${fadeOut ? "fade-out" : ""}`} />
  );
};

export default WebLoader;
