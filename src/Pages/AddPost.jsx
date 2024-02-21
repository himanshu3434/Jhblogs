import React from "react";
import { PostForm, Container } from "../component/index";
function AddPost() {
  return (
    <div className="sm:px-[20px] lg:px-[180px]">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
