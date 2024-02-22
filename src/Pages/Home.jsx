import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../component";
import dbService from "../Appwrite/conf";
import { useSelector } from "react-redux";

function Home() {
  const AuthStatus = useSelector((state) => state.auth.status);
  const post = useSelector((state) => state.post.posts);

  if (post.length === 0) {
    return (
      <>
        <div className="w-full  ">
          <div className="">
            <div className=" h-[300px]  flex justify-center items-center ">
              <div className="text-3xl text-white  ">
                There is No Post Yet be The First to Create It{" "}
              </div>
            </div>
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
