import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a separate CSS file for styling

const HomePage = () => {
  return (
    <div className="main">
      {/* Navigation Bar */}
      <div className="nav">
        <div className="nav-part-1">
          <Link to="/">
            <img src="logo.png" alt="logo" />
            {/* Ensure logo.png is in your public folder or use an import */}
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="content">
        <div className="content-left">
          <h5>Your Troy Assistant</h5>
          <h1>Troy University Chatbot</h1>
          <p>
            Chat now for quick and easy support on academics, student services, and more at Troy University!
          </p>
          <button className="btn">Chat Now</button>
        </div>
        
        <div className="content-right">
          {/* Product Sections */}
          <div className="product">
          <Link to="/Advisor">
            <img src="3.png" alt="AI Catalog" />
            <button className="btnss">AI CATALOG</button>
            </Link>
          </div>
          <div className="product">
          <Link to="/catalog">
            <img src="5.jpg" alt="AI Advisor" />
            <button className="btnss">AI ADVISOR</button>
            </Link>
          </div>
          <div className="product">
            {/* Link to the GPA Evaluate page */}
            <Link to="/gpa">
              <img src="6.jpg" alt="GPA Evaluate" />
              <button className="btnss">GPA EVALUATE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
