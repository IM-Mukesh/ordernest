import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "recipes",
  initialState: {
    data: [],
  },
  reducers: {
    RECIPE: (recipe, action) => {
      return { ...recipe, ...action.payload };
    },
  },
});

export const { RECIPE } = slice.actions;
export default slice.reducer;
