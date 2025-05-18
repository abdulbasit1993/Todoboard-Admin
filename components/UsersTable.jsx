import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const UsersTable = ({ data }) => {
  console.log("data (UsersTable) ===>>> ", data);

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
          Users List
        </h2>

        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Users..."
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
                "Name",
                "Email",
                "Role",
                "Status",
                "Total Todos",
                "Created At",
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
            {data?.map((user) => (
              <motion.tr
                key={user?.id}
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
                          {user?.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{user?.name}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{user?.email}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{user?.role}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{user?.status}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{user?.totalTodos}</div>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <div className="flex items-center">
                    <div>{new Date(user?.createdAt).toLocaleDateString()}</div>
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

export default UsersTable;
