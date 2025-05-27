import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import Pagination from "./Pagination";

const TodosTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  console.log("data (todosTable) ===>>> ", data);

  const filteredTodos = useMemo(() => {
    return data?.filter(
      (todo) =>
        todo?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo?.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border
    border-[#1f1f1f] mx-2 md:mx-0 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 text-center md:text-left">
          Todos List
        </h2>

        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Todos..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2
          w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {[
                "Title",
                "Description",
                "Created By",
                "Status",
                "Created At",
                "Updated At",
                "Actions",
              ]?.map((header) => (
                <th
                  key={header}
                  className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium
                            text-gray-400 uppercase tracking-wider hidden md:table-cell"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredTodos?.map((todo) => (
              <motion.tr
                key={todo?._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col md:table-row mb-4 md:mb-0 border-b md:border-b-0
              border-gray-700 md:border-none p-2 md:p-0"
              >
                <td className="md:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-100">
                          {todo?.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-1 -mt-1 -mr-1">
                      <button className="text-indigo-500 hover:text-indigo-300">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-500 hover:text-red-300">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-gray-300">
                    {[
                      "Title",
                      "Description",
                      "Created By",
                      "Status",
                      "Created At",
                      "Updated At",
                      "Actions",
                    ]?.map((field) => (
                      <div key={field}>
                        <span className="capitalize">{field}: </span>
                      </div>
                    ))}
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{todo?.title}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{todo?.description}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{todo?.user?.username}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>
                      {todo?.status.charAt(0).toUpperCase() +
                        todo?.status.slice(1)}
                    </div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{new Date(todo?.createdAt).toLocaleDateString()}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{new Date(todo?.updatedAt).toLocaleDateString()}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex space-x-1 -ml-2">
                    <button className="text-indigo-500 hover:text-indigo-300 mr-1 cursor-pointer">
                      <Edit size={18} />
                    </button>

                    <button className="text-red-500 hover:text-red-300 cursor-pointer">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TodosTable;
