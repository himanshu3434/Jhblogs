import React from "react";
import { Link } from "react-router-dom";
import bucketService from "../Appwrite/storage";
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div>
        <div>
          <img src={bucketService.getImagePreview(featuredImage)} alt={title} />
        </div>

        <h1>{title}</h1>
      </div>
    </Link>
  );
}

export default PostCard;
