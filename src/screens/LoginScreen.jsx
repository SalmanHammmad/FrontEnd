import { useState } from 'react';
import { apiRequest } from '../utils/apiUtils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    try {
      const data = await apiRequest(`${import.meta.env.VITE_API_URL}/users/login`, 'POST', { email, password });
      console.log('logged in');
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/');
      toast.success('Logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Back To Main</button>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
