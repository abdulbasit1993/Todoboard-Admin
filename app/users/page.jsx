"use client";

import React, { useState, useEffect } from "react";
import StatCard from "@/components/StatCard";
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import withProtectedLayout from "@/components/layouts/withProtectedLayout";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/slices/userSlice";

const UsersPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const userData = useSelector((state) => state.userReducer.users);

  console.log("userData ===>>> ", userData);

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

        <div className="overflow-x-auto rounded-xl border border-[#1f1f1f] bg-[#1e1e1e] shadow-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-[#2a2a2a]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Name
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Email
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Role
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Status
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Total Todos
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                  Created At
                </th>
              </tr>
            </thead>

            <tbody>
              {userData && userData?.length > 0 ? (
                userData?.map((user) => (
                  <tr
                    key={user?.id}
                    className="border-t border-[#2c2c2c] hover:bg-[#2a2a2a] transition"
                  >
                    <td className="px-4 py-3 text-sm text-white">
                      {user?.name}
                    </td>

                    <td className="px-4 py-3 text-sm text-white">
                      {user?.email}
                    </td>

                    <td className="px-4 py-3 text-sm text-white">
                      {user?.role}
                    </td>

                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${
                          user?.status === "ACTIVE"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                      >
                        {user?.status.charAt(0) +
                          user?.status.slice(1).toLowerCase()}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-sm text-white">
                      {user?.totalTodos}
                    </td>

                    <td className="px-4 py-3 text-sm text-white">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-6 text-center text-gray-400"
                  >
                    {isLoading ? "Loading..." : "No users found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default withProtectedLayout(UsersPage);
