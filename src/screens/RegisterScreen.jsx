import { useState } from 'react';
import { apiRequest } from '../utils/apiUtils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TextField1 from '../components/TextFields/TextField1';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if(!name || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
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

          <TextField1
            label='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          
         
        </div>
        <div>
          <TextField1
            label='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required  
            type={'email'}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterScreen;
