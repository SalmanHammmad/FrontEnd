import { Link, useNavigate } from 'react-router-dom';
import { apiRequest } from '../utils/apiUtils';

const Navbar = ({ refreshList: handleRefresh }) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleSignOut = async () => {
        try {
            await apiRequest(`${import.meta.env.VITE_API_URL}/users/logout`, 'GET');
            console.log('Logged out');
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

  return (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 1rem',
    }}>
        <div>
           
        </div>
        <ul style={{
            display: 'flex',
            gap: '1rem',
            cursor: 'pointer',
        }}>
            {user && <span>Welcome, {user.name}</span>}
            {user ? (
            <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <>
                <Link to={'/login'}>Sign In</Link>
                <Link to={'/register'}>Sign Up</Link>
                </>
            )}
            
        </ul>
    </nav>
  )
}

export default Navbar

