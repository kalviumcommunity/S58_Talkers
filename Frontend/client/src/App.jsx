import { useState } from 'react'
import './App.css'
import StudentProfile from './components/StudentProfile';

function App() {

  const studentData = {
    "sr_no": 1,
    "name": "Aarav Sharma",
    "avg_call_time": 78,
    "social_media_usage": 3.2,
    "class_participation_percentage": 87,
    "study_group_participation": true,
    "reaction_to_feedback": "positive",
    "img_link": "https://img.freepik.com/premium-photo/portrait-young-handsome-indian-teenage-boy-street_251136-73549.jpg"
  };

  return (
    <>
    <h1>Student Profile</h1>
      <StudentProfile data={studentData}></StudentProfile>
    </>
  )
}

export default App
