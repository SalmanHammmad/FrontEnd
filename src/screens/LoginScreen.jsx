import { useState } from 'react';
import { apiRequest } from '../utils/apiUtils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TextField1 from '../components/TextFields/TextField1';


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
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Back To Main</button>
        <h2>Login</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <TextField1
            label='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField1
            label='Password'
            name='password'
            value={password}
            type={'password'}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success"  type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
