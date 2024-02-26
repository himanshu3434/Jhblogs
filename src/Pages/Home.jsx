import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../component";
import dbService from "../Appwrite/conf";
import { useDispatch, useSelector } from "react-redux";
import { storePost } from "../feature/postSlice";

function Home() {
  const AuthStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    dbService.getPosts([]).then((posts) => {
      const allPosts = posts.documents;

      dispatch(storePost({ allPosts }));
      setPost(allPosts);
    });
  }, []);

  if (!post || !AuthStatus) {
    return (
      <>
        <div className="w-full  ">
          <div className="">
            <div className=" h-[300px]  flex justify-center items-center ">
              <div className="text-3xl text-white  ">Login to Read Post </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:px-[20px] lg:px-[180px] ">
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
