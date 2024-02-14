import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../feature/authSlice";
import authService, { AuthService } from "../../Firebase/auth";
function LogoutBtn() {
  const dispatcher = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatcher(logout());
    });
  };

  return <button onClick={logoutHandler}>Logout</button>;
}

export default LogoutBtn;