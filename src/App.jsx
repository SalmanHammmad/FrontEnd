// src/App.jsx
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventScreen from './screens/EventScreen';
import UpdateScreenE from './screens/UpdateScreenE';
import UpdateScreenU from './screens/UpdateScreenU';
import NoPage from './screens/NoPage';
import UserScreen from './screens/UserScreen';
import UserProfileScreen from './screens/UserProfileScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<EventScreen />} /> {/* Home route */}
        {/* Main Event route with nested routes */}

        {/* Event routes */}
        <Route path="/events/*" element={<EventScreen />} />
        <Route path="/events/update/:eventId" element={<UpdateScreenE />} />

        {/* User routes */}
        <Route path="/users/*" element={<UserScreen />} />
        <Route path="/users/:userId" element={<UserProfileScreen />} />

        <Route path="/users/update/:userId" element={<UpdateScreenU />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
