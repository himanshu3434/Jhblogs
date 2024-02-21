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

  if (post.length === 0) {
    return (
      <>
        <div className="w-full  ">
          <div className="">
            <div>
              <div></div>
              <button></button>
            </div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="">
      <div className="grid grid-cols-1  md:grid-cols-3 lr:grid-cols-4 xl:grid-cols-6  sm:px-[20px] lg:px-[180px] ">
        {post.map((current) => (
          <div key={current.$id}>
            {/* <PostCard post={current} /> */}
            <PostCard {...current} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
