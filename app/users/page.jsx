"use client";

import React, { useState, useEffect } from "react";
import StatCard from "@/components/StatCard";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import withProtectedLayout from "@/components/layouts/withProtectedLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/slices/userSlice";
import UsersTable from "@/components/UsersTable";

const UsersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const userData = useSelector((state) => state.userReducer.users);

  // console.log("userData ===>>> ", userData);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={Users}
            value={userData ? userData.length : 0}
          />
        </motion.div>

        <UsersTable data={userData} />
      </main>
    </div>
  );
};

export default withProtectedLayout(UsersPage);
