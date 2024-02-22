import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/authSlice";
import postSlice from "../feature/postSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
  },
});
