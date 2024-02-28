import { useState } from 'react'
import './App.css'

function App() {
  const [studentData, setStudentData] = useState({
    sr_no: 1,
    name: "Aarav Sharma",
    avg_call_time: 78,
    social_media_usage: 3.2,
    class_participation_percentage: 87,
    study_group_participation: true,
    reaction_to_feedback: "positive",
    img_link: "https://img.freepik.com/premium-photo/portrait-young-handsome-indian-teenage-boy-street_251136-73549.jpg"
  });

  const handleNameChange = () => {
    setStudentData({
      ...studentData,
      name: "Updated Name"
    });
  }

  return (
    <>
      <div>
        <img src={studentData.img_link} className="profile-image" alt="Student Profile" />
      </div>
      <h1>{studentData.name}'s Dashboard</h1>
      <div className="card">
        <p>Average Call Time: {studentData.avg_call_time}</p>
        <p>Social Media Usage: {studentData.social_media_usage}</p>
        <p>Class Participation Percentage: {studentData.class_participation_percentage}</p>
        <p>Study Group Participation: {studentData.study_group_participation ? 'Yes' : 'No'}</p>
        <p>Reaction to Feedback: {studentData.reaction_to_feedback}</p>
        <button onClick={handleNameChange}>Change Name</button>
      </div>
    </>
  )
}

export default App
