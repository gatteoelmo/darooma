import { PreLoaderStyled } from "./styles/PreLoaderStyled";
import Darooma from "../assets/img/logo font white copia.svg";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const PreLoader = ({ startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Inizia immediatamente il caricamento
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const increment = Math.floor(Math.random() * 10) + 1; // Incremento casuale tra 1 e 10
        const nextCount = Math.min(prevCount + increment, 100); // Assicura che non superi 100
        return nextCount;
      });
    }, Math.floor(Math.random() * 100) + 70); // Intervallo casuale tra 50ms e 250ms

    // Forza il count a 100 al termine dell'animazione
    const timeout = setTimeout(() => {
      setCount(100);
      clearInterval(interval);
    }, 3000); // Durata totale massima (es. 3 secondi)

    return () => {
      clearInterval(interval); // Pulisce l'intervallo
      clearTimeout(timeout); // Pulisce il timeout
    };
  }, []); // Si avvia una volta al montaggio del componente

  return (
    <PreLoaderStyled className={startAnimation ? "animate" : ""}>
      <div className="loader-content">
        <div className="count">{count}%</div>
        <img src={Darooma} alt="Darooma Logo" />
      </div>
    </PreLoaderStyled>
  );
};
