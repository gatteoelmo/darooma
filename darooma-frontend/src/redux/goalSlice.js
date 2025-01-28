import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "goal",
  initialState: {
    deleteGoalState: true,
  },
  reducers: {
    toggleDeleteGoalState: (state) => {
      state.deleteGoalState = !state.deleteGoalState; // Modifica corretta dello stato
    },
  },
});

export const { toggleDeleteGoalState } = goalSlice.actions; // Esporta l'azione correttamente
export default goalSlice.reducer; // Esporta il reducer
