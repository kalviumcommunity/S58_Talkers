// HOME.JSX
import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home({ data, fetchData,setFlag,flag,login,setLogin }) {

  

  const navigate = useNavigate();

  const goToFormRoute = () => {
    navigate('/post_data');
  };
   
  const goToRegisterRoute = () => {
    navigate('/register');
  };

  const handleDelete = (id) => {
    try {
      const response = fetch(`http://localhost:3000/DELETE/${id}`, {
        method: 'DELETE'
      });
      setFlag(!flag)
    } catch (error) {
      console.error('Error deleting entity:', error);
    }
  };

  const handleUpdate = (e) => {
    let id = e._id;
    navigate(`/update_data/${id}`);
  };

  const handleLogout=()=>{
    document.cookie = "username=; expires=Thu, 01 Jan 2020 00:00:00 UTC; path=/;";
    setLogin(!login)
  }

  const goToLoginRoute=()=>{
    navigate("/login")
  }

  return (
    <div className="container">
      <h1>Talkers App</h1>
      <button className='add-button' onClick={goToFormRoute}>Add New Entity</button>
      <button className='reg-button' onClick={goToRegisterRoute}>SignUp</button>
      {login==false?<button className='logout-button' onClick={handleLogout}>Logout</button>:
      <button className='login-button' onClick={goToLoginRoute}>LogIn</button>}
      <div className="entity-container">
        {data &&
          data.map((e, index) => (
            <div key={index} className="entity-card">
              <h2>{e.name}-</h2>
              <img id="img-src" src={e.img_link} alt="person" />
              <button className='edit' onClick={() => handleUpdate(e)}>Update</button>
              <button className='dlt' onClick={() => handleDelete(e._id)}>Delete</button>
              
              <h3>Average call:{e.avg_call_time}Hrs</h3>
              <h3>Reaction:{e.reaction_to_feedback}</h3>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
