import { DateStyled } from "./styles/DateStyled";
import { useEffect, useState } from "react";
import x from "../assets/img/x.svg";

// eslint-disable-next-line react/prop-types
export const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // function to calculate the time left
  function calculateTimeLeft() {
    const now = new Date(); // current date
    const target = new Date(deadline); // target date
    const difference = target - now; // difference in milliseconds

    if (difference > 0) {
      return {
        // calculate the time left in days, hours, minutes
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  // update the time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
