import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    username: "",
    userType: "",
    loggedIn: false,
    password: "",
  },
  reducers: {
    USER: (user, action) => {
      return { ...user, ...action.payload };
    },
    LOG_OUT: (user, action) => {
      return undefined;
    },
  },
});

export const { USER } = slice.actions;
export default slice.reducer;
