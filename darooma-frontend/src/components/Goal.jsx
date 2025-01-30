/* eslint-disable react/prop-types */
import { GoalStyled } from "./styles/GoalStyled";
import DarumaNoEyes from "../assets/img/daruma-no-eyes.svg";
import DarumaOneEye from "../assets/img/daruma-1eye.svg";
import Arrow from "../assets/img/arrow.svg";
import XpRed from "../assets/img/xpRed.svg";
import { CountdownTimer } from "./Date";
import { TiDelete } from "react-icons/ti";
import { deleteGoal } from "../services/apiCalls";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toggleDeleteGoalState } from "../redux/goalSlice";
import Tick from "../assets/img/tick.svg";

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
  const token = `Bearer ${localStorage.getItem("token")}`;
  const dispatch = useDispatch();

  // Usa useMutation per la cancellazione
  const { mutate: deleteGoalMutation, isLoading: isDeleting } = useMutation({
    mutationFn: () => deleteGoal(id, token), // la funzione da eseguire
    onSuccess: () => {
      // console.log(`Goal ${id} deleted successfully`);
      dispatch(toggleDeleteGoalState(id)); // aggiorna lo stato dopo la cancellazione
    },
    onError: (error) => {
      console.error("Error deleting goal", error);
    },
  });

  const onDelete = () => {
    deleteGoalMutation();
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
            onComplete(id);
            // console.log(id);
          }}
          style={{
            backgroundColor: completedApi ? "rgba(10, 0, 0, 0.9)" : "white",
          }}
        ></button>
      </div>
      <button
        className="delete"
        onClick={onDelete}
        disabled={isDeleting} // disabilita il bottone durante la cancellazione
      >
        <TiDelete size={30} />
      </button>

      <img
        className="arrow"
        src={Arrow}
        alt=""
        style={{ display: completedApi ? "none" : "block" }}
      />
      <img
        src={Tick}
        className="tick"
        alt=""
        style={{ display: completedApi ? "block" : "none" }}
      />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <CountdownTimer deadline={deadline} />
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
