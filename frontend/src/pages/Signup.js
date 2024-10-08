import React, { useState } from 'react';
import axios from 'axios';

// Login Page Component
const Singup = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/signup', { email, password });
      alert(response.data.message);
    } catch (error) {
      alert('Error Signup ');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

<input 
          type="text" 
          placeholder="Role" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          required 
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Singup;
