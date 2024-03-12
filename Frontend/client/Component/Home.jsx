// HOME.JSX
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home({ data }) {
  const navigate = useNavigate();

  const goToFormRoute = () => {
    navigate('/post_data');
  };

  return (
    <div className="container">
      <button onClick={goToFormRoute}>Add New Entity</button>
      <div className="entity-container">
        {data &&
          data.map((e, index) => (
            <div key={index} className="entity-card">
              <h1>{e.name} - {e.age}</h1>
              <img src={e.img_link} alt="person" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
