import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../component";

import { useSelector } from "react-redux";
function AllPost() {
  const Post = useSelector((state) => state.post.posts);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-3 lr:grid-cols-4 xl:grid-cols-6  sm:px-[20px] lg:px-[180px]">
          {Post.map((current) => {
            return (
              <div key={current.$id}>
                <PostCard {...current} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
