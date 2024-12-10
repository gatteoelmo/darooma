import {createSlice} from "@reduxjs/toolkit";

export const backgroundSlice = createSlice({
    name: "background",
    initialState: {
        isScaled: false,
    },
    reducers: {
        toggleScale: (state) => {
            state.isScaled = !state.isScaled;
        },
    },
});

export const { toggleScale } = backgroundSlice.actions;
export default backgroundSlice.reducer;