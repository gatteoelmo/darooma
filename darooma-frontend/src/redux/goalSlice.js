import { createSlice } from "@reduxjs/toolkit";

export const goalSlice = createSlice({
  name: "goal",
  initialState: {
    deletedGoal: true,
  },
  reducers: {
    toggleDeleteGoalState: (state) => {
      state.deletedGoal = !state.deletedGoal; 
    },
  },
});

export const { toggleDeleteGoalState } = goalSlice.actions; 
export default goalSlice.reducer; 
