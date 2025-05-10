import { useEffect } from "react";

const IphoneGuard = () => {
  useEffect(() => {
    const isIphone = /iPhone/.test(navigator.userAgent) && !window.MSStream;

    if (isIphone) {
      document.body.classList.add("iphone-mode");
      console.log("📱 iPhone detectado – animaciones desactivadas");
    }
  }, []);

  return null; 
};

export default IphoneGuard;
