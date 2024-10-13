import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import Routes component
import "./App.css";
import GPAEvaluate from "./gpa";

const App = () => {
  return (
    <Router>
      <div className="main">
        <div className="nav">
          <div className="nav-part-1">
            <Link to="/">
              <img src="logo.png" alt="logo" />{" "}
              {/* Ensure logo.png is in your public folder or use an import */}
            </Link>
            <ul>
              <li>Home</li>
              <li>Admissions</li>
              <li>Academics</li>
              <li>Resources</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="content-left">
            <h5>Your Troy Assistant</h5>
            <h1>Troy University Chatbot</h1>
            <p>
              Chat now for quick and easy support on academics, student
              services, and more at Troy University!
            </p>
            <button className="btn">Chat Now</button>
          </div>
          <div className="content-right">
            <div className="product">
              <img src="3.png" alt="nike shoes" />
              <button className="btnss">AI CATALOG</button>
            </div>
            <div className="product">
              <img src="5.jpg" alt="nike shoes" />
              <button className="btnss">AI ADVISOR</button>
            </div>
            <div className="product">
              {/* Add Link component for the GPA Evaluate page */}
              <Link to="/gpa">
                <img src="6.jpg" alt="nike shoes" />
                <button className="btnss">GPA EVALUATE</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Use Routes instead of Switch for route management */}
        <Routes>
          <Route path="/gpa" element={<GPAEvaluate />} />
          {/* You can add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
