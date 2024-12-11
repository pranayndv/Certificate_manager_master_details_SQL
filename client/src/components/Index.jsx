import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col items-center justify-center text-sm">

      <h3 className="text-lg font-medium text-gray-700 text-center mb-6">
        CHOOSE OPTIONS FROM HERE
      </h3>

      <div className="flex justify-center items-center text-center mb-8 flex-wrap gap-4">
        <Link
          to="/addCategory"
          className="border rounded-md bg-white hover:bg-blue-950 hover:text-white text-gray-700 border-gray-400 py-3 px-6 w-[12rem] text-center shadow-md transition duration-300"
        >
          Add Category
        </Link>
        <Link
          to="/addDetails"
          className="border rounded-md bg-white hover:bg-blue-950 hover:text-white text-gray-700 border-gray-400 py-3 px-6 w-[12rem] text-center shadow-md transition duration-300"
        >
          Details Form
        </Link>
        <Link
          to="/list"
          className="border rounded-md bg-white hover:bg-blue-950 hover:text-white text-gray-700 border-gray-400 py-3 px-6 w-[12rem] text-center shadow-md transition duration-300"
        >
          Details List
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Index;
