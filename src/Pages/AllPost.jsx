import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../component";
import dbService from "../Appwrite/conf";
function AllPost() {
  const [Post, setPost] = useState([]);
  useEffect(() => {
    dbService.getPosts([]).then((posts) => setPost(posts.documents));
  }, []);
  return (
    <div>
      <Container>
        <div className="py-8">
          {Post.map((current) => (
            <div key={current.$id}>
              <PostCard post={current} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
