"use client";

import React, { useState } from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email ===>>>  ", email);
    console.log("Password ===>>>  ", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            Log In
          </span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <Mail className="mr-2 inline-block w-3.5" />
              Email
            </label>
            <div>
              <input
                id="email"
                type="email"
                autoComplete="off"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <Lock className="mr-2 inline-block w-3.5" />
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <CustomButton title={"Login"} loading={false} />
          </div>

          <div className="text-center mt-4">
            <Link href="#" className="text-gray-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link href={"/signup"} className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
