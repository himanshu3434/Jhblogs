import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../Firebase/auth";
import { login as storeLogin } from "../feature/authSlice";
import { useForm } from "react-hook-form";
import { Input, Logo, Button } from "./index";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>sign in to your account </h1>
        </div>
        <div>
          <p>Don't have a Account</p>
          <Link to="/signup">
            <div>Sign Up</div>
          </Link>
        </div>
        <div>
          {error && <div>Error Problem :{error}</div>}
          <form onSubmit={handleSubmit(login)}>
            <div>
              <Input
                label="Email :"
                type="email"
                placeholder="Enter your Email address"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              ></Input>
              <Input
                label="Password :"
                type="password"
                placeholder="Enter your Password address"
                {...register("password", {
                  required: true,
                })}
              ></Input>

              <Button type="submit">Log In</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
