import React from 'react';
import UpdateForm from '../components/UpdateForm';

const UpdateScreen = ({ selectedEvent, apiEndpoint, onUpdateSuccess }) => {
    return (
        <div>
            <h2>Update Event</h2>
            <UpdateForm
                entityId={selectedEvent._id}
                entityType="events"
                fields={[
                    { name: 'title', label: 'Title', required: true },
                    { name: 'location', label: 'Location', required: true },
                    { name: 'description', label: 'Description' , required: true},
                    { name: 'startDate', label: 'Start Date' , required: false},
                    { name: 'endDate', label: 'End Date', required: false },
                ]}
                apiEndpoint={apiEndpoint}
                onUpdateSuccess={onUpdateSuccess}
            />
        </div>
    );
};

export default UpdateScreen;
