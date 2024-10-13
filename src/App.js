import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Adjust the path if necessary
import GPAEvaluate from './gpa'
// import GPACalculator from './GPACalculator'; // Assuming this is the GPA Evaluate page component

const App = () => {
  return (
    <Router>
        <Routes>
     
        {/* <Route path="/gpa" component={GPACalculator} /> */}
        {/* Add other routes here */}
        <Route
            path="/"
            element={
              <Home></Home>
              
            }
          />
        
        <Route
            path="/gpa"
            element={
              
              <GPAEvaluate></GPAEvaluate>
            }
          />
        </Routes>
    </Router>
  );
};

export default App;
