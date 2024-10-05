import DummyData from '../components/DummyData';
import { Link } from 'react-router-dom';

const Navbar = ({ refreshList: handleRefresh }) => {

  return (
    <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        // marginBottom: '1rem',
        padding: '0 1rem',
    }}>
        <div>
            <DummyData onEventCreated={handleRefresh} />
        </div>
        <ul style={{
            display: 'flex',
            gap: '1rem',
            cursor: 'pointer',
        }}>
            <Link to={'/login'}>Sign In</Link>
            <Link to={'/register'}>Sign Up</Link>
            <Link to={'/logout'}>Sign Out</Link>
        </ul>
    </nav>
  )
}

export default Navbar