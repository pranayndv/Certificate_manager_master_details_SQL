import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import AddCategory from "./components/AddCategory";
import AddQuestion from "./components/AddQuestion";
import QuestionList from "./components/QuestionList";
import Index from "./components/Index";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={ <Index />}/>
          <Route path="/addCategory" element={ <AddCategory />}/>
          <Route path="/addDetails" element={ <AddQuestion />}/>
          <Route path="/list" element={ <QuestionList />}/>
       
  </Routes>

          {/* <Link to="/addCategory"  className="border bottom-1 rounded-md  border-gray-400 py-3 px-4">Add Category</Link>
          <Link to="/addQuetions"  className="border bottom-1 rounded-md  border-gray-400 py-3 px-4">Details form</Link>
          <Link to="/list"  className="border bottom-1 rounded-md  border-gray-400 py-3 px-4">List</Link> */}
    </Router>
  );
};

export default App;
