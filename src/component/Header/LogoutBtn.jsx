import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../feature/authSlice";
import authService from "../../Appwrite/auth";
import { useNavigate } from "react-router-dom";
function LogoutBtn() {
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatcher(logout());
      navigate("/");
    });
  };

  return <button onClick={logoutHandler}>Logout</button>;
}

export default LogoutBtn;
