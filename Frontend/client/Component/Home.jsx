// HOME.JSX
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home({ data, fetchData,setFlag,flag }) {
  const navigate = useNavigate();

  const goToFormRoute = () => {
    navigate('/post_data');
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
      <div className="entity-container">
        {data &&
          data.map((e, index) => (
            <div key={index} className="entity-card">
              <h1>{e.name} - {e.age}</h1>
              <img src={e.img_link} alt="person" />
              <button className='edit' onClick={() => handleUpdate(e)}>Update</button>
              <button className='dlt' onClick={() => handleDelete(e._id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
