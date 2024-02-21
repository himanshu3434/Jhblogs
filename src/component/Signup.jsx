import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../Appwrite/auth";
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
      <div className="w-[350px] h-[450px] rounded-xl p-5 mt-10 mb-10 ml-auto mr-auto bg-gray-500 text-white">
        <div className="text-3xl mb-4 text-center text-bold">
          <h1>Sign up </h1>
        </div>

        <div>
          {error && <div>Error Problem :{error}</div>}
          <form onSubmit={handleSubmit(signup)}>
            <div>
              <Input
                label="Full Name "
                placeholder="Enter your Full Name"
                {...register("Full Name", {
                  required: true,
                })}
              />

              <Input
                label="Email "
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
                label="Password "
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

        <div
          className="flex justify-center  mt-5 
          "
        >
          <p>Already have a Account? </p>
          <Link to="/login">
            <div className="pl-1 underline text-blue-200">Sign in</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
