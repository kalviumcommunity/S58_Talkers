import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { api_url } from './API/api';
import Form from  "../Component/Form";
import Home from '../Component/Home';
import { Route, Routes } from 'react-router-dom';
import UpdateForm from '../Component/UpdateForm';
import RegisterForm from '../Component/Register';
import LoginForm from '../Component/Login';

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


  
  const [data, setData] = useState(0);

  
  useEffect(()=>{
   
    fetch('http://localhost:3000/GET')
   
    .then(res=> res.json())
   
    .then(res=>{
      console.log(res)
      setData(res)
     })
 
     .catch(err=>{
      console.log(err);
     })
  
    },[])
  const handleNameChange = () => {
    setStudentData({
      ...studentData,
      name: "Updated Name"
    });
  }



  return (
    <>
      <div>

        
        {data && data.map((e)=>{
        
        return (<div>
        
            <h1>{e.name} - {e.age}</h1>
        
            <img src={e.img_link} alt="person"/>
        
          </div>)
        
        })}
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
