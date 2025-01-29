import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "goal",
  initialState: {
    deletedGoal: true,
  },
  reducers: {
    toggleDeleteGoalState: (state) => {
      state.deletedGoal = !state.deletedGoal; // Modifica corretta dello stato
    },
  },
});

export const { toggleDeleteGoalState } = goalSlice.actions; // Esporta l'azione correttamente
export default goalSlice.reducer; // Esporta il reducer
