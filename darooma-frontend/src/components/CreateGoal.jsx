import { FormStyled } from "./styles/FormStyled.js";
import { useForm } from "react-hook-form";
import { createGoal } from "../services/apiCalls";

export const CreateGoal = ({ setState, state }) => {
  const token = `Bearer ${localStorage.getItem("token")}`; // Aggiunge "Bearer " al token
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await createGoal(data, token);
      console.log("Goal created successfully!");
      setState(!state);
    } catch (error) {
      console.error(
        "Error during goal creation",
        error.response?.data || error
      );
    }
  };

  return (
    <FormStyled>
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
        <button type="submit" className="create">
          Create
        </button>
      </form>
    </FormStyled>
  );
};
