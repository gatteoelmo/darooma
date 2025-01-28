/* eslint-disable react/prop-types */
import { GoalStyled } from "./styles/GoalStyled";
import DarumaNoEyes from "../assets/img/daruma-no-eyes.svg";
import DarumaOneEye from "../assets/img/daruma-1eye.svg";
import Arrow from "../assets/img/arrow.svg";
// import Xp from "../assets/img/xp.svg";
import XpRed from "../assets/img/xpRed.svg";
import { useState } from "react";
import { CountdownTimer } from "./Date";
import { TiDelete } from "react-icons/ti";
import { deleteGoal } from "../services/apiCalls";
import { useDispatch } from "react-redux";
import { deleteGoalState } from "../redux/goalSlice";

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
  deadline,
}) => {
  const [completed, setCompleted] = useState(false);
  const token = `Bearer ${localStorage.getItem("token")}`;
  const dispatch = useDispatch();
  const onDelete = async () => {
    deleteGoal(id, token);
    console.log(id);
    dispatch(deleteGoalState());
  };

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
      <button className="delete" onClick={onDelete}>
        <TiDelete size={30} />
      </button>

      <img
        className="arrow"
        src={Arrow}
        alt=""
        style={{ display: completed ? "none" : "block" }}
      />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <CountdownTimer deadline={deadline} />
      {/* <Date deadline={deadline} /> */}
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
