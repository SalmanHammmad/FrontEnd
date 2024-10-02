import React, { useEffect, useState } from 'react';
import CreateEvent from '../components/event/createEvent.jsx';
import Events from '../components/event/Events';
import UpdateScreen from './UpdateScreen';
import SearchEvent from '../components/event/SearchEvent';
import DummyData from '../components/DummyData';
import './EventScreen.css';
const EventManager = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const apiEndpoint = import.meta.env.VITE_API_URL;

    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    const handleDeleteEvent = (eventId) => {
        fetch(`${apiEndpoint}/events/${eventId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw new Error('Delete failed');
                console.log('Event deleted successfully:', eventId);
                handleRefresh(); // Trigger a refresh after deletion
            })
            .catch((error) => console.error('Error deleting event:', error));
    };

    const handleUpdateEvent = (event) => {
        setSelectedEvent(event); 
    };

    const handleUpdateSuccess = () => {
        setSelectedEvent(null);
        handleRefresh();
    };

    return (
        <div className="event-manager-container">
            <h1 className="event-manager-header">EVENT KRAO</h1>
            <DummyData onEventCreated={handleRefresh}/>
            {!selectedEvent ? (
                <>
                    <section className="event-manager-section">
                        <h2>Create Event</h2>
                        <CreateEvent onEventCreated={handleRefresh} />
                    </section>

                    <hr className="divider" />

                    <section className="event-manager-section">
                        <SearchEvent
                            onUpdateEvent={handleUpdateEvent}
                            onDeleteEvent={handleDeleteEvent} // Pass handleDeleteEvent here
                        />
                    </section>

                    <hr className="divider" />

                    <section className="event-manager-section">
                        <h2>Events List</h2>
                        <Events refreshKey={refreshKey} onUpdateEvent={handleUpdateEvent} />
                    </section>
                </>

            ) : (
                <UpdateScreen
                    selectedEvent={selectedEvent}
                    apiEndpoint={apiEndpoint}
                    onUpdateSuccess={handleUpdateSuccess}
                    Back={() => setSelectedEvent(null)}
                />
            )}
        </div>
    );
};

export default EventManager;

