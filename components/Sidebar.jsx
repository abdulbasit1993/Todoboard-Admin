"use client";

import React, { useState } from "react";
import {
  Bell,
  DollarSign,
  House,
  Info,
  Mail,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
  ListTodoIcon,
  LogOut,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import appData from "../data/appData.json";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
import CustomModal from "./CustomModal";
import LogoutModal from "./LogoutModal";

const ICONS = {
  House,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Mail,
  Users,
  ListTodoIcon,
  Bell,
  Info,
  LogOut,
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarItems, setSidebarItems] = useState(appData?.sidebarItems);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    setShowConfirmModal(false);
    localStorage.removeItem("token");
    dispatch(setUser(null));
    router.replace("/login");
  };

  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer"
        >
          <Menu size={24} />
        </button>

        <nav className="mt-8 flex-grow">
          {sidebarItems?.map((item) => {
            const IconComponent = ICONS[item.icon];

            if (item.name === "Logout") {
              return (
                <button
                  key={item?.name}
                  onClick={() => setShowConfirmModal(true)}
                  className="w-full flex items-center cursor-pointer p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 text-left"
                >
                  <IconComponent size={20} style={{ minWidth: "20px" }} />

                  {isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap">{item.name}</span>
                  )}
                </button>
              );
            }

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                    pathname === item.href ? "bg-[#2f2f2f]" : ""
                  }`}
                >
                  <IconComponent size={20} style={{ minWidth: "20px" }} />

                  {isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap">{item.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      <LogoutModal
        visible={showConfirmModal}
        onSubmitClick={handleLogout}
        onCancelClick={() => setShowConfirmModal(false)}
      />
    </div>
  );
};

export default Sidebar;
