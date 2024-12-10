import { GoalStyled } from "./styles/GoalStyled";
import DarumaNoEyes from "../assets/img/daruma-no-eyes.svg";

export const Goal = () => {
  return (
    <GoalStyled>
      <img src={DarumaNoEyes} alt="" />
      <h3>Goal</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        sapiente.
      </p>
    </GoalStyled>
  );
};
