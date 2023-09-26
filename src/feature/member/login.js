import { createSlice } from "@reduxjs/toolkit";
// import { stat } from "fs";

const initialLoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setIsLogin: (state, action) => {
      state = { isLogin: action.payload };
      return state;
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
