import React, { useEffect, useState } from "react";
import dbService from "../Appwrite/conf";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm, Container } from "../component";
import { useSelector } from "react-redux";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts);
  useEffect(() => {
    posts.map((currentPost) => {
      if (currentPost.$id === slug) {
        setPost(currentPost);
      }
      return;
    });
  }, [slug, navigate]);
  return post ? (
    <div>
      <Container>
        <div>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : null;
}

export default EditPost;
