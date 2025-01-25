/* eslint-disable react/prop-types */
import { GoalStyled } from "./styles/GoalStyled";
import DarumaNoEyes from "../assets/img/daruma-no-eyes.svg";
import DarumaOneEye from "../assets/img/daruma-1eye.svg";
import Arrow from "../assets/img/arrow.svg";
// import Xp from "../assets/img/xp.svg";
import XpRed from "../assets/img/xpRed.svg";
import { useState } from "react";
import { Date } from "./Date";

export const Goal = ({
  add,
  state,
  setState,
  title,
  description,
  xp,
  onComplete,
  id,
  completedApi,
}) => {
  const [completed, setCompleted] = useState(false);
  return !add ? (
    <GoalStyled>
      <div className="xp">
        <span>{xp}</span>
        <img src={XpRed} alt="" />
      </div>
      <div className="daruma">
        <img src={DarumaOneEye} alt="Daruma" />
        <button
          onClick={() => {
            setCompleted(!completed);
            onComplete(id);
            console.log(id);
          }}
          style={{
            backgroundColor:
              completed || completedApi ? "rgba(10, 0, 0, 0.9)" : "white",
          }}
        ></button>
      </div>
      <img
        className="arrow"
        src={Arrow}
        alt=""
        style={{ display: completed ? "none" : "block" }}
      />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <Date />
    </GoalStyled>
  ) : (
    <GoalStyled>
      <div className="daruma">
        <img src={DarumaNoEyes} alt="" />
      </div>
      <button className="add-goal" onClick={() => setState(!state)}>
        +
      </button>
    </GoalStyled>
  );
};
