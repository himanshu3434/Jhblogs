import React, { useEffect, useState } from "react";
import dbService from "../Appwrite/conf";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm, Container } from "../component";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dbService.getPost(slug).then((post) => {
      if (post) setPost(post);
      else navigate("/");
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
