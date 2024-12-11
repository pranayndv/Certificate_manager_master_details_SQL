import React, { useState, useEffect } from "react";
import { addQuestion, fetchCategories } from "../api/api";
import { Link } from "react-router-dom";
const AddQuestion = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    question_text: "",
    category_id: "",
  });
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetchCategories();
      setCategories(response.data);
    };
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.category_id) return alert("Please select a category!");
    await addQuestion(form);
    alert("Question added successfully!");
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      question_text: "",
      category_id: "",
    });
  };

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 text-sm">
      <div className="flex justify-center items-center text-center my-4 fixed top-0">
           <Link to="/addCategory"  className="border bottom-1 rounded-l-md   border-gray-400 w-[10rem] py-3 px-4">Add Category</Link>
          <Link to="/addDetails"  className="border bottom-1 border-gray-400 bg-blue-950 hover:bg-blue-900 text-white w-[10rem]  py-3 px-4">Details Form</Link>
          <Link to="/list"  className="border bottom-1 rounded-r-md  border-gray-400  w-[10rem]  py-3 px-4">Details List</Link>
          </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[720px] mt-20 bg-white border border-gray-200 shadow-lg rounded-md p-6 sm:p-8 lg:p-10"
      >
        <h3 className="border-b border-gray-200 font-medium text-lg sm:text-xl pb-4 mb-6">Add Details</h3>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="Fname" className="font-medium mb-2">First Name</label>
            <input
              id="Fname"
              type="text"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              placeholder="Enter your first name"
              required
              className="rounded border border-gray-300 bg-white px-4 py-2 font-normal text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Lname" className="font-medium mb-2">Last Name</label>
            <input
              id="Lname"
              type="text"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              placeholder="Enter your last name"
              required
              className="rounded border border-gray-300 bg-white px-4 py-2 font-normal text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email" className="font-medium mb-2">Email</label>
            <input
              id="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              required
              className="rounded border border-gray-300 bg-white px-4 py-2 font-normal text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Phone" className="font-medium mb-2">Phone</label>
            <input
              id="Phone"
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Phone"
              required
              className="rounded border border-gray-300 bg-white px-4 py-2 font-normal text-gray-700 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>


        <div className="flex flex-col mt-6">
          <label htmlFor="category" className="font-medium mb-2">Select Certificate Category</label>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`category_${category.id}`}
                  name="category"
                  value={category.id}
                  checked={form.category_id === category.id.toString()}
                  onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={`category_${category.id}`}
                  className="font-normal text-gray-700"
                >
                  {category.category_name}
                </label>
              </div>
            ))}
          </div>
        </div>


        <div className="flex flex-col mt-6">
          <label htmlFor="que" className="font-medium mb-2">Write Your Question</label>
          <textarea
            id="que"
            value={form.question_text}
            onChange={(e) => setForm({ ...form, question_text: e.target.value })}
            placeholder="Enter your question"
            required
            className="rounded border border-gray-300 bg-white px-4 py-2 h-32 font-normal text-gray-700 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>


        <button
          type="submit"
          className="mt-6 w-full rounded bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
