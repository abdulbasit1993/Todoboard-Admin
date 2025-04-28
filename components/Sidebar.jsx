"use client";

import React, { useState } from "react";
import {
  Bell,
  DollarSign,
  House,
  Info,
  Mail,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import appData from "../data/appData.json";
import Link from "next/link";

const ICONS = {
  House,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Mail,
  Users,
  Bell,
  Info,
};

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState(appData?.sidebarItems);
  const pathname = usePathname();

  return (
    <div className="relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 w-64">
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p- flex flex-col border-r border-[#2f2f2f]">
        <nav className="mt-8 flex-grow">
          {sidebarItems?.map((item) => {
            const IconComponent = ICONS[item.icon];

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                    pathname === item.href ? "bg-[#2f2f2f]" : ""
                  }`}
                >
                  <IconComponent size={20} style={{ minWidth: "20px" }} />
                  <span className="ml-4 whitespace-nowrap">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
