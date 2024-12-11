import React, { useState, useEffect } from "react";
import { addCategory, fetchCategories, deleteCategory } from "../api/api";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetchCategories();
      setCategories(response.data);
    };
    loadCategories();
  }, []);


  const handleAddCategory = async () => {
    if (!categoryName.trim()) return alert("Category name is required!");
    const response = await addCategory({ category_name: categoryName });
    setCategories([...categories, response.data]);
    setCategoryName("");
  };

  // Handle category deletion
  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-sm">
      <div className="flex justify-center items-center text-center my-4 fixed top-0">
        <Link
          to="/addCategory"
          className="border bottom-1 rounded-l-md bg-blue-950 hover:bg-blue-900 text-white border-gray-400 w-[10rem] py-3 px-4"
        >
          Add Category
        </Link>
        <Link
          to="/addDetails"
          className="border bottom-1 border-gray-400 w-[10rem]  py-3 px-4"
        >
          Details Form
        </Link>
        <Link
          to="/list"
          className="border bottom-1 rounded-r-md  border-gray-400  w-[10rem]  py-3 px-4"
        >
          Details List
        </Link>
      </div>
      <div className="w-full max-w-[720px] bg-white border border-gray-200 shadow-lg rounded-md p-6 sm:p-8 lg:p-10">
        <h2 className="border-b border-gray-200 font-medium text-lg sm:text-xl pb-4 mb-6">
          Add Certificate Category
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
            className="flex-1 rounded border border-gray-300 bg-white px-4 py-2 font-normal text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddCategory}
            className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Add Category
          </button>
        </div>

        <h3 className="font-medium text-base sm:text-lg mt-6">Certificate Categories:</h3>
        <ul className="mt-4 space-y-4">
          {categories.map((category) => (
            <li
              key={category.id}
              className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-md"
            >
              <span className="font-normal text-gray-700">
                {category.category_name}
              </span>
              <button
                onClick={() => handleDeleteCategory(category.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddCategory;
