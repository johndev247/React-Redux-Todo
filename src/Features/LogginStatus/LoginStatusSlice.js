import {createSlice} from "@reduxjs/toolkit";
var initialState = JSON.parse(localStorage.getItem("isLoggedIn"));
if (initialState == null) {
  initialState = false;
}

export const LoginStatusSlice = createSlice({
  name: "LoginStatus",
  initialState,
  reducers: {
    ToggleLoginStatus: (state, action) => {
      console.log("Executed", state);
      const tempState = state;
      localStorage.setItem("isLoggedIn", JSON.stringify(!tempState));
      return !tempState;
    },
    LoginStatus: (state, action) => {
      console.log("Executed", state);
      const tempState = state;
      localStorage.setItem("isLoggedIn", JSON.stringify(!tempState));
      return !tempState;
    },
  },
});
export const {ToggleLoginStatus} = LoginStatusSlice.actions;
export default LoginStatusSlice.reducer;
