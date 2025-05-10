"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";

export default function ToastWrapper({ children }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
