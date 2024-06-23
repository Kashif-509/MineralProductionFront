import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Update with your backend URL

// Function to fetch mineral revenue data for a specific year
export const getMineralRevenuesByYear = async (year) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/mineral-revenues/${year}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mineral revenue data:", error);
    throw error; // Throw error for handling in components
  }
};

// Function to add new mineral revenue data
export const addMineralRevenue = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/mineral-revenues`, data);
    return response.data;
  } catch (error) {
    console.error("Error adding mineral revenue data:", error);
    throw error;
  }
};

// Function to update mineral revenue data for a specific year, month, and district
export const updateMineralRevenue = async (year, month, district, data) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/api/mineral-revenues/${year}/${month}/${district}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating mineral revenue data:", error);
    throw error;
  }
};

// Function to delete mineral revenue data for a specific year, month, and district
export const deleteMineralRevenue = async (year, month, district) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/mineral-revenues/${year}/${month}/${district}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting mineral revenue data:", error);
    throw error;
  }
};
