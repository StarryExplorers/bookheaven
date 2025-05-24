import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else navigate('/dashboard');
  }

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
