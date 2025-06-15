"use client";

import React, { useState, useEffect } from "react";
import withProtectedLayout from "@/components/layouts/withProtectedLayout";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import { ListTodoIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "@/redux/slices/todoSlice";
import TodosTable from "@/components/TodosTable";
import Pagination from "@/components/Pagination";
import { fetchUsers } from "@/redux/slices/userSlice";

const TodosPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const isLoading = useSelector((state) => state.todoReducer.isLoading);
  const pagination = useSelector((state) => state.todoReducer.todos.pagination);
  const todosData = useSelector((state) => state.todoReducer.todos);

  console.log('selectedUser ==========>> ', selectedUser)
 
  useEffect(() => {
    if (selectedUser) {
    dispatch(fetchTodos({ page: currentPage, limit: limit, userId: selectedUser }));
    } else if (selectedStatus) {
      dispatch(fetchTodos({ page: currentPage, limit: limit, status: selectedStatus }));
    } else {
      dispatch(fetchTodos({ page: currentPage, limit: limit }));
    }
  }, [currentPage, selectedUser, selectedStatus]);

  useEffect(() => {
   dispatch(fetchUsers());
  }, [])
  

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
            name="Total Todos"
            icon={ListTodoIcon}
            value={pagination?.totalTodos ? pagination?.totalTodos : 0}
          />
        </motion.div>
        <TodosTable data={todosData?.todos} loading={isLoading} selectedUser={selectedUser} setSelectedUser={setSelectedUser} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
        <Pagination
          totalItems={pagination?.totalTodos}
          itemsPerPage={limit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          loading={isLoading}
        />
      </main>
    </div>
  );
};

export default withProtectedLayout(TodosPage);
