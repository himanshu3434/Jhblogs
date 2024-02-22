import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    storePost(state, action) {
      state.posts = action.payload.allPosts;
    },
  },
});

export const { storePost } = postSlice.actions;
export default postSlice.reducer;
