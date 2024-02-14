import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../Firebase/auth";
import { login as storeLogin } from "../feature/authSlice";
import { useForm } from "react-hook-form";
import { Input, Logo, Button } from "./index";
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const signup = async (data) => {
    setError("");
    try {
      const session = await authService.createAcount(data);
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
          <h1>sign up to your account </h1>
        </div>

        <div>
          {error && <div>Error Problem :{error}</div>}
          <form onSubmit={handleSubmit(signup)}>
            <div>
              <Input
                label="Full Name :"
                placeholder="Enter your Full Name"
                {...register("Full Name", {
                  required: true,
                })}
              />

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

              <Button type="submit">Create Account</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
