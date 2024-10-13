// src/gpa.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CourseItem = styled.li`
  background-color: white;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Result = styled.h3`
  text-align: center;
  color: #4CAF50;
`;

const GPAEvaluate = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [creditHours, setCreditHours] = useState('');
  const [grade, setGrade] = useState('');
  const [gpa, setGPA] = useState(null);

  const gradePoints = {
    'A': 12,
    'B': 9,
    'C': 6,
    'D': 3,
    'F': 0
  };

  const addCourse = (e) => {
    e.preventDefault();
    if (courseName && creditHours && grade) {
      const points = gradePoints[grade];
      setCourses([...courses, { name: courseName, credits: parseFloat(creditHours), grade, points }]);
      setCourseName('');
      setCreditHours('');
      setGrade('');
    }
  };

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    courses.forEach(course => {
      totalGradePoints += course.points;
      totalCreditHours += course.credits;
    });

    const calculatedGPA = totalGradePoints / totalCreditHours;
    setGPA(calculatedGPA.toFixed(2));
  };

  return (
    <Container>
      <Title>GPA Evaluate</Title>
      <Form onSubmit={addCourse}>
        <Input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <Input
          type="number"
          placeholder="Credit Hours"
          value={creditHours}
          onChange={(e) => setCreditHours(e.target.value)}
          required
        />
        <Select value={grade} onChange={(e) => setGrade(e.target.value)} required>
          <option value="">Select Grade</option>
          {Object.keys(gradePoints).map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </Select>
        <Button type="submit">Add Course</Button>
      </Form>

      <h3>Courses:</h3>
      <CourseList>
        {courses.map((course, index) => (
          <CourseItem key={index}>
            {course.name} - {course.credits} credits - Grade: {course.grade} - Points: {course.points}
          </CourseItem>
        ))}
      </CourseList>

      <Button onClick={calculateGPA}>Calculate GPA</Button>
      {gpa && <Result>Your GPA: {gpa}</Result>}
    </Container>
  );
};

export default GPAEvaluate;