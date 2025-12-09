// src/services/api.js

/**
 * API configuration and helper functions.
 * Update the BASE_URL with your actual backend URL.
 */

// REPLACE WITH YOUR ACTUAL API URL
const BASE_URL = 'http://localhost:5000/api'; 

export const endpoints = {
  products: `${BASE_URL}/products`,
  features: `${BASE_URL}/features`, // Example endpoint for "Why Choose Us"
  contact: `${BASE_URL}/contact`,   // Example endpoint for contact info
};

/**
 * Generic fetcher
 * @param {string} url - The URL to fetch
 * @returns {Promise<any>} - The JSON response
 */
export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

