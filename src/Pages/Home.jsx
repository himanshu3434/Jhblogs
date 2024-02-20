import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../component";
import dbService from "../Appwrite/conf";
import { useSelector } from "react-redux";

function Home() {
  const [post, setPost] = useState([]);
  const AuthStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    dbService.getPosts([]).then((posts) => setPost(posts.documents));
  }, []);

  if (post.length === 0 || AuthStatus === false) {
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
