import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AdminLogin = () => {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      //   navigate("/");
    } catch (error) {
      setMessage("Please provide valid email and password");
      console.error(error);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)]  flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white px-8 pt-6 pb-8 mb-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="username"
              name="username"
              id="username"
              placeholder="Username"
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
          <div className="w-full">
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold px-8 rounded focus:outline-none py-2">
              Login
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy;2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
