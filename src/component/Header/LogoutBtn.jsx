import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../feature/authSlice";
import authService from "../../Appwrite/auth";
import { useNavigate } from "react-router-dom";
import { storePost } from "../../feature/postSlice";
function LogoutBtn() {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService.logout().then(() => {
      const allPosts = undefined;
      dispatcher(storePost({ allPosts }));
      dispatcher(logout());
      navigate("/");
    });
  };

  return <button onClick={logoutHandler}>Logout</button>;
}

export default LogoutBtn;
