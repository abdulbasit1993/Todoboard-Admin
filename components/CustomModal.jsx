"use client";

import React from "react";
import { X } from "lucide-react";
import ModalPortal from "./ModalPortal";

const CustomModal = ({ visible, onSubmitClick, onCancelClick }) => {
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
              <h2 className="text-gray-800 text-xl font-bold">Welcome Back!</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                asperiores. Blanditiis aliquam voluptatem recusandae atque
                doloribus quae, ea deserunt eos voluptas omnis accusamus
                incidunt laboriosam maiores fuga pariatur qui eaque.
              </p>

              <div className="flex gap-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Sign In
                </button>
                <button
                  onClick={onCancelClick}
                  className="bg-gray-300 text-white px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
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

export default CustomModal;
