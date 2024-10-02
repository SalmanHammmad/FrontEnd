import React, { useEffect, useState } from 'react';
import CreateUser from '../components/user/CreateUser.jsx';
import Users from '../components/user/Users';
import UpdateScreen from './UpdateUserscreen.jsx';
import SearchUser from '../components/user/SearchUser';
import DummyData from '../components/user/DummyDataUser';
import './UserScreen.css';

const UserScreen = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const [selectedUser, setSelectedUser] = useState(null);
    const apiEndpoint = import.meta.env.VITE_API_URL;

    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    const handleDeleteUser = (userId) => {
        fetch(`${apiEndpoint}/users/${userId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw new Error('Delete failed');
                console.log('User deleted successfully:', userId);
                handleRefresh(); // Trigger a refresh after deletion
            })
            .catch((error) => console.error('Error deleting user:', error));
    };

    const handleUpdateUser = (user) => {
        setSelectedUser(user); 
    };

    const handleUpdateSuccess = () => {
        setSelectedUser(null);
        handleRefresh();
    };

    return (
        <div className="user-manager-container">
            <h1 className="user-manager-header">USER MANAGER</h1>
            <DummyData onUserCreated={handleRefresh}/>
            {!selectedUser ? (
                <>
                    <section className="user-manager-section">
                        <h2>Create User</h2>
                        <CreateUser onUserCreated={handleRefresh} />
                    </section>

                    <hr className="divider" />

                    <section className="user-manager-section">
                        <SearchUser
                            onUpdateUser={handleUpdateUser}
                            onDeleteUser={handleDeleteUser} // Pass handleDeleteUser here
                        />
                    </section>

                    <hr className="divider" />

                    <section className="user-manager-section">
                        <h2>User List</h2>
                        <Users refreshKey={refreshKey} onUpdateUser={handleUpdateUser} />
                    </section>
                </>
            ) : (
                <UpdateScreen
                    selectedUser={selectedUser}
                    apiEndpoint={apiEndpoint}
                    onUpdateSuccess={handleUpdateSuccess}
                    Back={() => setSelectedUser(null)}
                />
            )}
        </div>
    );
};

export default UserScreen;
