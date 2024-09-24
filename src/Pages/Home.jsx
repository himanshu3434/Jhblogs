import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../component";
import dbService from "../Appwrite/conf";
import { useDispatch, useSelector } from "react-redux";
import { storePost } from "../feature/postSlice";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    dbService.getPosts([]).then((posts) => {
      const allPosts = posts.documents;
      console.log("allPosts", allPosts);
      dispatch(storePost({ allPosts }));
      setPost(allPosts);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="">
      <div className=" flex flex-col sm:flex-row justify-center sm:justify-normal items-center sm:items-baseline  flex-wrap px-4">
        {post &&
          post.map((current) => {
            const timestamp = current.$createdAt;
            console.log("timestamp", timestamp);
            const date = new Date(timestamp);
            const options = {
              year: "numeric",
              month: "short",
              day: "numeric",
            };

            const dateStr = new Intl.DateTimeFormat("en-US", options).format(
              date
            );

            return (
              <div key={current.$id}>
                {/* <PostCard post={current} /> */}
                <PostCard {...current} dateStr={dateStr} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
