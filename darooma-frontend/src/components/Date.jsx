import { DateStyled } from "./styles/DateStyled";
import { useEffect, useState } from "react";
import x from "../assets/img/x.svg";

// eslint-disable-next-line react/prop-types
export const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Funzione per calcolare il tempo rimanente
  function calculateTimeLeft() {
    const now = new Date();
    const target = new Date(deadline);
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Pulizia del timer
  }, []);

  return (
    <DateStyled>
      <span>
        <p className="category">days</p>
        <p className="value">
          {timeLeft.days !== 0 ? timeLeft.days : <img src={x} alt="" />}
        </p>
      </span>
      <span>
        <p className="category">hours</p>
        <p className="value">
          {timeLeft.hours !== 0 ? timeLeft.hours : <img src={x} alt="" />}
        </p>
      </span>
      <span>
        <p className="category">min.</p>
        <p className="value">
          {timeLeft.minutes !== 0 ? timeLeft.minutes : <img src={x} alt="" />}
        </p>
      </span>
      {}
    </DateStyled>
  );
};
