import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dbService from "../Appwrite/conf";
import { Button, Container } from "../component";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import bucketService from "../Appwrite/storage";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    dbService.deletePost(post.$id).then((status) => {
      if (status) {
        bucketService.deleteImage(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="">
      <div className="ml-auto mr-auto   sm:px-[40px] lg:px-[200px] text-white ">
        <div>
          <img
            src={bucketService.getImagePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-full h-[300px] "
          />
        </div>

        <div>
          {isAuthor && (
            <div className="absolute right-9 top-9">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-700" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-800" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6  ">
          <h1 className="text-2xl font-bold ">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </div>
    </div>
  ) : null;
}
