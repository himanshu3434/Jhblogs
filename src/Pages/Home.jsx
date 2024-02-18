import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../component";
import dbService from "../Appwrite/conf";

function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    dbService.getPosts([]).then((posts) => setPost(posts.documents));
  }, []);

  if (post.length === 0) {
    return (
      <>
        <div>Login to React Post</div>
      </>
    );
  }
  return (
    <div>
      <Container>
        <div>
          {post.map((current) => (
            <div key={current.$id}>
              {/* <PostCard post={current} /> */}
              <PostCard {...current} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
