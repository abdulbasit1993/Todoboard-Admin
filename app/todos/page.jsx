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

const TodosPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const isLoading = useSelector((state) => state.todoReducer.isLoading);
  const pagination = useSelector((state) => state.todoReducer.todos.pagination);
  const todosData = useSelector((state) => state.todoReducer.todos);

  useEffect(() => {
    dispatch(fetchTodos({ page: currentPage, limit: limit }));
  }, [currentPage]);

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
        <TodosTable data={todosData?.todos} />
        <Pagination
          totalItems={pagination?.totalTodos}
          itemsPerPage={limit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default withProtectedLayout(TodosPage);
