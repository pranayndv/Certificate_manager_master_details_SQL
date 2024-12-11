import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../api/api";
import { Link } from "react-router-dom";
const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      const response = await fetchQuestions();
      setQuestions(response.data);
    };
    loadQuestions();
  }, []);

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-sm">
            <div className="flex justify-center items-center text-center my-4 fixed top-0">
           <Link to="/addCategory"  className="border bottom-1 rounded-l-md   border-gray-400 w-[10rem] py-3 px-4">Add Category</Link>
          <Link to="/addDetails"  className="border bottom-1 border-gray-400  w-[10rem]  py-3 px-4">Details Form</Link>
          <Link to="/list"  className="border bottom-1 rounded-r-md  border-gray-400 bg-blue-950 hover:bg-blue-900 text-white  w-[10rem]  py-3 px-4">Details List</Link>
          </div>

      <div className="w-full max-w-[720px] bg-white border border-gray-200 shadow-lg rounded-md p-6 sm:p-8 lg:p-10 mt-20">
        <h2 className="border-b border-gray-200 font-medium text-lg sm:text-xl pb-4 mb-6">
          Details List
        </h2>

        {questions.length === 0 ? (
          <p className="text-gray-600 text-center">
            No questions available
          </p>
        ) : (
          <ul className="space-y-6">
            {questions.map((question) => (
              <li
                key={question.id}
                className="bg-gray-50 border border-gray-200 rounded-md p-4"
              >
                <p className="mb-2 text-gray-800 font-medium">
                  <strong>User:</strong> {question.first_name} {question.last_name}{" "}
                  <span className="text-gray-600 text-sm">
                    ({question.email}, {question.phone})
                  </span>
                </p>
                <p className="mb-2 text-gray-700">
                  <strong>Certificate Category:</strong> {question.Category.category_name}
                </p>
                <p className="text-gray-700">
                  <strong>Question:</strong> {question.question_text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuestionList;
