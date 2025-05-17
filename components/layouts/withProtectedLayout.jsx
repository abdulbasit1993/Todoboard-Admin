"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function withProtectedLayout(Component) {
  return function ProtectedComponent(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/login");
      } else {
        setIsLoading(false);
      }
    }, []);

    if (isLoading) return null;

    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto w-full">
            <Header />
            <main>
              <Component {...props} />
            </main>
          </div>
        </div>
      </div>
    );
  };
}
