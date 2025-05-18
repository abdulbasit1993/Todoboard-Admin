"use client";

import React from "react";
import { X } from "lucide-react";
import ModalPortal from "./ModalPortal";

const LogoutModal = ({ visible, onSubmitClick, onCancelClick }) => {
  if (visible)
    return (
      <ModalPortal>
        <div
          onClick={onCancelClick}
          className="fixed bg-black/50 min-h-screen z-[9999] w-screen flex justify-center items-center top-0 left-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-4 relative"
          >
            <div className="flex flex-col gap-4 max-w-[400px]">
              <h2 className="text-gray-800 text-xl font-bold">
                Confirm Logout
              </h2>
              <p className="text-gray-700">Are you sure you want to logout?</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={onSubmitClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                >
                  Yes
                </button>
                <button
                  onClick={onCancelClick}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 cursor-pointer"
                >
                  No
                </button>
              </div>
            </div>

            <div className="absolute top-2 right-2 cursor-pointer">
              <X onClick={onCancelClick} size={20} color={"#000000"} />
            </div>
          </div>
        </div>
      </ModalPortal>
    );
};

export default LogoutModal;
