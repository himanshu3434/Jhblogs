import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  userData: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      console.log("userData of store ", action.payload.userData);
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout(state) {
      state.status = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
