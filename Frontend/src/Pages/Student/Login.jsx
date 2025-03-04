import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full flex-col">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" bg-white rounded-lg shadow-lg  min-w-96"
      >
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center text-gray-600">
            Welcome Back,Enter Your Credentials
          </h1>
          <form className="flex flex-col gap-8 mt-4 ">
            <input
              type="email"
              placeholder="Email"
              className="p-2 outline-none border border-gray-500/30 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 outline-none border border-gray-500/30 rounded-md"
            />
            <button className="bg-gradient-to-br from from-purple-400 to-purple-600 transition-all hover:scale-105 text-white p-2 rounded-md">
              Login
            </button>
          </form>
        </div>
        <div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          div
          className="bg-purple-500 text-center py-5 rounded-b-lg text-white"
        >
          Forgot Password Go to Admin
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
