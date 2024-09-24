import React from "react";
import { Link } from "react-router-dom";
import bucketService from "../Appwrite/storage";
function PostCard({ $id, title, featuredImage, dateStr }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-[200px] pb-6  text-center mt-5 mb-5 bg-[#2F3136] rounded-3xl  overflow-hidden mx-4">
        <div className="mb-4   ">
          <img
            src={bucketService.getImagePreview(featuredImage)}
            className=" w-[200px] h-[200px] rounded-3xl hover:scale-105  "
            alt={title}
            loading="lazy"
          />
        </div>

        <h1 className=" text-white font-semibold hover:text-slate-400 truncate px-2 ">
          {title}
        </h1>
        <h2 className=" text-slate-300  truncate  text-sm ">{dateStr}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
