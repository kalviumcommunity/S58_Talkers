import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function LoginForm({ login, setLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    document.cookie = `username=${username};`;


    setLogin(!login);
    navigate('/');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleUsername} type="text" placeholder="Username" />
        <input onChange={handlePassword} type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginForm;
