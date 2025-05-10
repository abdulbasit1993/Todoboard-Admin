import React from "react";
import Image from "next/image";
import us from "@/assets/images/us-flag.png";
import sampleUserImg from "@/assets/images/sample-user.jpg";
import { Bell } from "lucide-react";
import { useSelector } from "react-redux";
import initials from "initials";

const Header = () => {
  const user = useSelector((state) => state.authReducer.user);

  console.log("user (Header) ===>> ", user);

  return (
    <header className="bg-[#1e1e1e] shadow-lg border-b border-[#1f1f1f] mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100">
          Dashboard
        </h1>

        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* <Image
            src={us}
            alt="country flag"
            width={25}
            height={18}
            className="rounded-full shadow-md cursor-pointer"
          /> */}

          <div className="relative">
            <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300 cursor-pointer hover:text-white" />
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* <Image
              src={sampleUserImg}
              alt={"admin"}
              width={35}
              height={35}
              className="rounded-full border border-gray-600"
            /> */}
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {initials(user?.username).toUpperCase()}
              </span>
            </div>

            <span className="hidden sm:block text-gray-100 font-medium">
              {user ? user.username : "Admin"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
