// src/utils/apiUtils.js

export const apiRequest = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  };
  