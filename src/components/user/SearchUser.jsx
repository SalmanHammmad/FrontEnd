import React, { useEffect, useState } from 'react';
import './SearchUser.css';
import DeleteButton2 from '../buttons/DeleteButton2';
import EditButton2 from '../buttons/EditButton2';


const SearchEvent= ({ onUpdateUser, onDeleteUser }) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiURL = import.meta.env.VITE_API_URL;

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiURL}/users?search=${searchQuery}`); // Send search query to backend
      if (!response.ok) throw new Error('Failed to fetch user');
      const data = await response.json();
      setSearchResults(data); // Set results in the state
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      setLoading(true); // Optionally set loading state
      await onDeleteUser(userId); // Wait for the deletion to complete
      setRefreshKey((prevKey) => prevKey + 1); // Trigger refresh
    } catch (err) {
      setError('Error deleting user');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    const callSearch = async () => {
      await handleSearch();
    }
    if(refreshKey > 0) callSearch();
  }, [refreshKey]);

  return (
    <div className="search-user-container">
      
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((user) => (
            <li key={user._id} className="search-result-item">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>ID:</strong> {user._id}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <EditButton2 onClick={() => onUpdateUser(user)} />
              <DeleteButton2 onClick={() => handleDelete(user._id)} />
            </li>
          ))}
        </ul>
      )}

      {searchResults.length === 0 && !loading && !error && searchQuery && (
        <p>No user found.</p>
      )}
    </div>
  );
};

export default SearchEvent;
