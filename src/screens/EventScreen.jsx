// src/screens/EventManager.jsx
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreateEvent from '../components/event/CreateEvent';
import Events from '../components/event/Events';
import SearchEvent from '../components/event/SearchEvent';
import UpdateScreenE from './UpdateScreenE';
import { deleteEventById } from '../api/eventApi';  
import './EventScreen.css';
import Navbar from '../components/Navbar';

const EventManager = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const navigate = useNavigate();

    const handleRefresh = () => setRefreshKey((prevKey) => prevKey + 1);

    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteEventById(eventId);
            console.log('Event deleted successfully:', eventId);
            handleRefresh(); // Refresh the list
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    
    const handleUpdateEvent = (eventId) => {
        navigate(`/events/update/${eventId}`);  // Navigate to the update route using the event ID
    };
    

    return (
        <div className="event-manager-container">
            <h1 className="event-manager-header">EVENT MANAGER</h1>
            <Navbar refreshList={handleRefresh} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <section className="event-manager-section">
                                <h2>Create Event</h2>
                                <CreateEvent onEventCreated={handleRefresh} />
                            </section>

                            <hr className="divider" />

                            <section className="event-manager-section">
                                <SearchEvent onUpdateEvent={handleUpdateEvent} onDeleteEvent={handleDeleteEvent} />
                            </section>

                            <hr className="divider" />

                            <section className="event-manager-section">
                                <h2>Events List</h2>
                                <Events refreshKey={refreshKey} onUpdateEvent={handleUpdateEvent} />
                            </section>
                        </>
                    }
                />
               <Route path="/events/update/:eventId" element={<UpdateScreenE onUpdateSuccess={handleRefresh} />} />

            </Routes>
        </div>
    );
};

export default EventManager;
