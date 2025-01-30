import { FormStyled } from "./styles/FormStyled.js";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGoal } from "../services/apiCalls";
import { TiDelete } from "react-icons/ti";

// eslint-disable-next-line react/prop-types
export const CreateGoal = ({ setState, state }) => {
  const token = `Bearer ${localStorage.getItem("token")}`; // Aggiunge "Bearer " al token
  const { register, handleSubmit } = useForm();

  const queryClient = useQueryClient();

  // Definizione della mutation
  const mutation = useMutation({
    mutationFn: (data) => createGoal(data, token),
    onSuccess: () => {
      console.log("Goal created successfully!");
      setState(!state);
      queryClient.invalidateQueries(["goals"]); // Aggiorna le query con chiave "goals"
    },
    onError: (error) => {
      console.error(
        "Error during goal creation",
        error.response?.data || error
      );
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data); // Usa la mutation per eseguire l'API call
  };

  return (
    <FormStyled>
      <TiDelete
        onClick={() => setState(!state)}
        size={30}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "130px",
          right: "10px",
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Every quest needs a title.</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          {...register("title", { required: "Title is required" })}
        />
        <label htmlFor="description">
          What’s the story behind this mission?
        </label>
        <input
          type="text"
          placeholder="Description"
          name="description"
          {...register("description", { required: "Description is required" })}
        />
        <label htmlFor="difficulty">
          Is this a warm-up, a challenge, or an epic battle?
        </label>
        <select
          name="difficulty"
          {...register("difficulty", { required: "Difficulty is required" })}
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <label htmlFor="deadline">
          Pick a deadline to keep your momentum strong.
        </label>
        <input
          type="date"
          placeholder="Deadline"
          name="deadline"
          {...register("deadline", { required: "Deadline is required" })}
        />
        <button
          type="submit"
          className="create"
          disabled={mutation.isLoading} // Disabilita il pulsante durante il caricamento
        >
          {mutation.isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </FormStyled>
  );
};
