import { DashboardStyled } from "../components/styles/DashboardStyled";
import { Header } from "../components/Header";
import { Goal } from "../components/Goal";
import { useState, useEffect } from "react";
import { CreateGoal } from "../components/CreateGoal";
import { getGoals, completeGoal } from "../services/apiCalls";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

export const Dashboard = () => {
  const name = localStorage.getItem("name");
  const token = `Bearer ${localStorage.getItem("token")}`;
  const deleteGoalState = useSelector((state) => state.goal);

  const [createGoalVisible, setCreateGoalVisible] = useState(false);

  const queryClient = useQueryClient();
  // Fetch goals with React Query
  const {
    data: goals = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["goals"],
    queryFn: () => getGoals(token),
    enabled: !createGoalVisible, // Prevent fetching while the modal is open
    onError: (err) => console.error("Error fetching goals:", err),
  });

  // Mutation for completing a goal
  const completeGoalMutation = useMutation({
    mutationFn: (id) => completeGoal(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["goals"]); // Refetch goals after mutation
    },
    onError: (err) => console.error("Error completing goal:", err),
  });

  // Refetch goals when deleteGoalState changes
  useEffect(() => {
    if (deleteGoalState) {
      queryClient.invalidateQueries(["goals"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteGoalState]);

  const handleComplete = (id) => {
    completeGoalMutation.mutate(id);
  };

  return (
    <DashboardStyled>
      <Helmet>
        <title>YOUR GOALS</title>
      </Helmet>
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
        {isLoading ? (
          <div>Loading goals...</div>
        ) : isError ? (
          <div>Error fetching goals: {error.message}</div>
        ) : (
          [...goals.data]
            .reverse()
            .map((goal) => (
              <Goal
                onComplete={handleComplete}
                key={goal._id}
                id={goal._id}
                title={goal.title}
                description={goal.description}
                difficulty={goal.difficulty}
                xp={goal.xp}
                deadline={goal.deadline}
                completedApi={goal.completed}
              />
            ))
        )}
      </div>
    </DashboardStyled>
  );
};
