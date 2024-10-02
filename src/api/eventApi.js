import { apiRequest } from '../utils/apiUtils';

const apiEndpoint = import.meta.env.VITE_API_URL;

export const fetchEventById = async (eventId) => {
  return apiRequest(`${apiEndpoint}/events/${eventId}`);
};

export const deleteEventById = async (eventId) => {
  return apiRequest(`${apiEndpoint}/events/${eventId}`, { method: 'DELETE' });
};

export const updateEventById = async (eventId, data) => {
  return apiRequest(`${apiEndpoint}/events/${eventId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};
