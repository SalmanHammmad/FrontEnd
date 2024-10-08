import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventScreen from './screens/event/EventScreen';
import UpdateScreenE from './screens/event/UpdateScreenE';
import UpdateScreenU from './screens/user/UpdateScreenU';
import NoPage from './screens/NoPage';

import PermanentDrawerLeft from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import UserScreen from './screens/user/UserScreen';
import UserProfileScreen from './screens/user/UserProfileScreen';

import AdminLayout from './components/AdminLayout';


function App() {
  return (
   
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AdminLayout></AdminLayout>} />

        {/* Main Event route with nested routes */}

        {/* Event routes */}
        <Route path="/events/*" element={<AdminLayout><EventScreen /></AdminLayout>} />
        <Route path="/events/update/:eventId" element={<UpdateScreenE />} />

        {/* User routes */}
        <Route path="/users/*" element={<AdminLayout><UserScreen /></AdminLayout>} />
        <Route path="/users/:userId" element={<AdminLayout><UserProfileScreen /></AdminLayout>} />

        <Route path="/users/update/:userId" element={<AdminLayout><UpdateScreenU /></AdminLayout>} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
