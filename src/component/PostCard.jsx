import React from "react";
import { Link } from "react-router-dom";
import bucketService from "../Appwrite/storage";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-[200px] h-[320px] text-center mt-5 mb-5 bg-gray-500 rounded-3xl  overflow-hidden">
        <div className="mb-4   ">
          <img
            src={bucketService.getImagePreview(featuredImage)}
            className=" w-[200px] h-[200px] rounded-3xl hover:scale-105  "
            alt={title}
          />
        </div>

        <h1 className="uppercase text-white font-semibold hover:text-slate-400 ">
          {title}
        </h1>
      </div>
    </Link>
  );
}

export default PostCard;
