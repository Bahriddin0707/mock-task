"use client";

import { CgGym } from "react-icons/cg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <CgGym className="text-6xl" />
      <div className="w-1/3 p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-red-600 my-3">Requested resource not found</p>{" "}
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4  dark:bg-gray-80 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
