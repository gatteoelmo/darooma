import { PreLoaderStyled } from "./styles/PreLoaderStyled";
import Darooma from "../assets/img/logo font white copia.svg";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const PreLoader = ({ startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // start immediately the preloader
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const increment = Math.floor(Math.random() * 10) + 1; // casual increment from 1 to 10
        const nextCount = Math.min(prevCount + increment, 100); // stop at 100
        return nextCount;
      });
    }, Math.floor(Math.random() * 70) + 50); // casual interval from 50ms to 70ms

    // the count will be set to 100 after 3 seconds
    const timeout = setTimeout(() => {
      setCount(100);
      clearInterval(interval);
    }, 3000); // total duration (3 seconds)

    return () => {
      clearInterval(interval); // clean the interval
      clearTimeout(timeout); // clean the timeout
    };
  }, []);

  return (
    <PreLoaderStyled className={startAnimation ? "animate" : ""}>
      <div className="loader-content">
        <div className="count">{count}%</div>
        <img src={Darooma} alt="Darooma Logo" />
      </div>
    </PreLoaderStyled>
  );
};
