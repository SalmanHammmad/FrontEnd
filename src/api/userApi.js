import { apiRequest } from '../utils/apiUtils';

const apiEndpoint = import.meta.env.VITE_API_URL;

export const fetchUserById = async (userId) => {
  return apiRequest(`${apiEndpoint}/users/${userId}`);
};

export const deleteUserById = async (userId) => {
  return apiRequest(`${apiEndpoint}/users/${userId}`, { method: 'DELETE' });
};

export const updateUserById = async (userId, data) => {
  return apiRequest(`${apiEndpoint}/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};
