import { useState } from 'react';
import { apiRequest } from '../utils/apiUtils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const data = await apiRequest(`${import.meta.env.VITE_API_URL}/users/register`, 'POST', { name, email, password });
        console.log('registered');
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
        toast.success('Registered successfully');
      } catch (error) {
        console.error('Error registering in:', error);
      }

  };

  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Back To Main</button>
        <h2>Register</h2>
      </div>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterScreen;
