import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const { loginUser, SignInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      setMessage("Please provide valid email and password");
      console.error(error);

      // Handle specific Firebase errors
      if (error.code === "auth/invalid-credential") {
        setError("root", {
          type: "manual",
          message:
            "Invalid email or password. Please check your credentials and try again.",
        });
      } else if (error.code === "auth/user-not-found") {
        setError("email", {
          type: "manual",
          message: "No account found with this email.",
        });
      } else if (error.code === "auth/wrong-password") {
        setError("password", {
          type: "manual",
          message: "Incorrect password.",
        });
      } else if (error.code === "auth/too-many-requests") {
        setError("root", {
          type: "manual",
          message:
            "Too many failed login attempts. Please try again later or reset your password.",
        });
      } else if (error.code === "auth/user-disabled") {
        setError("root", {
          type: "manual",
          message: "This account has been disabled. Please contact support.",
        });
      } else if (error.code === "auth/invalid-email") {
        setError("email", {
          type: "manual",
          message: "Invalid email address format.",
        });
      } else {
        setError("root", {
          type: "manual",
          message: error.message || "Login failed. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await SignInWithGoogle();
      alert("Login Succeful!");
      navigate("/");
    } catch (error) {
      alert("Google sign in failed");
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)]  flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white px-8 pt-6 pb-8 mb-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 italic text-xs mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 rounded focus:outline-none py-2">
              Login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Haven't an account? Please{" "}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>
        {/* Google sign in */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy;2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
