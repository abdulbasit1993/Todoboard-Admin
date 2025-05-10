"use client";

import React, { useEffect, useState } from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await api.post("/auth/login", payload);

      console.log("response (login) ===>>> ", response);

      const userRole = response?.user?.role;

      if (response?.success) {
        if (userRole !== "ADMIN") {
          toast.error("Access denied. You must be an admin to log in.");
          setIsLoading(false);
          return;
        } else {
          dispatch(setUser(response?.user));
          toast.success("Login successful!");
          router.replace("/home");
        }
      } else {
        toast.error("Login failed");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error logging in: ", error);

      const { message } = error?.response?.data;

      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            Welcome to Todoboard Admin!
          </span>
        </h2>

        <h2 className="text-2xl font-bold mb-6 text-center">
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
            <CustomButton title={"Login"} loading={isLoading} />
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
