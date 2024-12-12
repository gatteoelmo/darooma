import { GoalStyled } from "./styles/GoalStyled";
// import DarumaNoEyes from "../assets/img/daruma-no-eyes.svg";
import DarumaOneEye from "../assets/img/daruma-1eye.svg";
import Arrow from "../assets/img/arrow.svg";
// import Xp from "../assets/img/xp.svg";
import XpRed from "../assets/img/xpRed.svg";
import { useState } from "react";
import { Date } from "./Date";

export const Goal = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <GoalStyled>
      <div className="xp">
        <span>50</span>
        <img src={XpRed} alt="" />
      </div>
      <div className="daruma">
        <img src={DarumaOneEye} alt="Daruma" />
        <button
          onClick={() => setCompleted(!completed)}
          style={{
            backgroundColor: completed ? "rgba(10, 0, 0, 0.9)" : "white",
          }}
        ></button>
      </div>
      <img
        className="arrow"
        src={Arrow}
        alt=""
        style={{ display: completed ? "none" : "block" }}
      />
      <h3>Goal</h3>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        doloremque vero ipsa officiis repellendus excepturi optio quo! Vel, sed
        fuga!
      </p>
      <Date />
    </GoalStyled>
  );
};
