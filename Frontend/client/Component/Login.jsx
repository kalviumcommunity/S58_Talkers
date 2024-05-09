import React, { useState } from 'react';
import './Login.css';


import { useNavigate } from 'react-router-dom';

function LoginForm({ login, setLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  const navigate = useNavigate();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    
   
    // document.cookie = `username=${username};`;

    
   
    fetch('http://localhost:7777/login',{
      
   
    method:'POST',
   
    body: JSON.stringify({ username, password }),
   
    headers:{"Content-Type":"application/json"}
    
    
  }).then((res)=>{
  
    return res.json()
    
  
  }).then((res)=>{
  
    console.log(res)
  
    let token=res.Token;
  
    document.cookie = `Token=${token};`;
    
  
  }).catch((err)=>{
     
  
    console.log(err);
    })

    
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
