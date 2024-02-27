import { useState } from 'react'
import './App.css'
import StudentProfile from './components/StudentProfile';

function App() {

  const randomData = {
    "sr_no": 11,
    "name": "Aarav Mehta",
    "avg_call_time": 58,
    "social_media_usage": 1.2,
    "class_participation_percentage": 59,
    "study_group_participation": false,
    "reaction_to_feedback": "negative",
    "img_link": "https://img.freepik.com/premium-photo/portrait-young-handsome-indian-teenage-boy-street_251136-73549.jpg"
  };

  return (
    <>
    <h1>Student Profile</h1>
      <StudentProfile data={randomData}></StudentProfile>
    </>
  )
}

export default App
