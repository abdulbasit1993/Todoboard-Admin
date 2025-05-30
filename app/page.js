"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.replace("/home");
    } else {
      router.replace("/login");
    }
  }, []);

  return null;
}
