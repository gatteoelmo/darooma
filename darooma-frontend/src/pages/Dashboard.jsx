import { DashboardStyled } from "../components/styles/DashboardStyled";
import { Header } from "../components/Header";
import { Goal } from "../components/Goal";
import { useState, useEffect } from "react";
import { CreateGoal } from "../components/CreateGoal";
import { get, set } from "react-hook-form";
import { getGoals } from "../services/apiCalls";
import { use } from "react";

export const Dashboard = () => {
  const name = localStorage.getItem("name");
  const [goals, setGoals] = useState([]);
  const token = `Bearer ${localStorage.getItem("token")}`;

  const [createGoalVisible, setCreateGoalVisible] = useState(false);

  const fetchGoals = async () => {
    try {
      const response = await getGoals(token);
      setGoals(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(`error in fetching goals: ${error}`);
    }
  };

  useEffect(() => {
    setGoals([]);
    fetchGoals();
  }, []);

  return (
    <DashboardStyled>
      {createGoalVisible && (
        <CreateGoal setState={setCreateGoalVisible} state={createGoalVisible} />
      )}
      <Header />
      <div className="blur"></div>
      <div className="hello">
        <h2>Hello, {name}! Let’s rack up some XP.</h2>
      </div>
      <div className="goals-container">
        <Goal
          add="true"
          setState={setCreateGoalVisible}
          state={createGoalVisible}
        />
        {goals.map((goal) => (
          <Goal
            key={goal._id}
            id={goal._id}
            title={goal.title}
            description={goal.description}
            difficulty={goal.difficulty}
            xp={goal.xp}
            deadline={goal.deadline}
            completed={goal.completed}
            setState={setCreateGoalVisible}
            state={createGoalVisible}
          />
        ))}
      </div>
    </DashboardStyled>
  );
};
