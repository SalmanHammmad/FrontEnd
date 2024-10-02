import React from 'react';
import UpdateForm from '../components/UpdateForm';

const UpdateScreen = ({ selectedUser, apiEndpoint, onUpdateSuccess, Back }) => {

    return (
        <div>
            <h2>Update User</h2>
            <UpdateForm
                entityId={selectedUser._id}
                entityType="users"
                fields={[
                    { name: 'name', label: 'Name', required: true },
                    { name: 'email', label: 'Email', required: true },
                    { name: 'role', label: 'Role', required: false }, // Optional field for user role
                ]}
                apiEndpoint={apiEndpoint}
                onUpdateSuccess={onUpdateSuccess}
                Back={Back}
            />
        </div>
    );
};

export default UpdateScreen;

