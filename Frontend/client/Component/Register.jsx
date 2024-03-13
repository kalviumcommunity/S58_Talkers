// USER SCHEMA
// name: String,
// username: String,
// email: String,
// mobile: Number,
// password: String

import React, { useState } from 'react';
import './Form.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleMobile(e) {
    setMobile(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      name: name,
      username: username,
      email: email,
      mobile: mobile,
      password: password,
    };

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Registration Successful');
        // You may want to redirect the user to a different page after successful registration.
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" placeholder="Name" />
        <input onChange={handleUsername} type="text" placeholder="Username" />
        <input onChange={handleEmail} type="email" placeholder="Email" />
        <input onChange={handleMobile} type="number" placeholder="Mobile" />
        <input onChange={handlePassword} type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default RegisterForm;
