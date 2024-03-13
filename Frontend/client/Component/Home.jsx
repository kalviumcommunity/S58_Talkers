// HOME.JSX
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home({ data, fetchData,setFlag,flag }) {
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

  return (
    <div className="container">
      <h1>Talkers App</h1>
      <button className='add-button' onClick={goToFormRoute}>Add New Entity</button>
      <button className='reg-button' onClick={goToRegisterRoute}>SignUp</button>
      <div className="entity-container">
        {data &&
          data.map((e, index) => (
            <div key={index} className="entity-card">
              <h2>{e.name}-</h2>
              <img id="img-src" src={e.img_link} alt="person" />
              <button className='edit' onClick={() => handleUpdate(e)}>Update</button>
              <button className='dlt' onClick={() => handleDelete(e._id)}>Delete</button>
              
              <h3>Average call {e.avg_call_time}Hrs</h3>
              <h3>Reaction:{e.reaction_to_feedback}</h3>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
