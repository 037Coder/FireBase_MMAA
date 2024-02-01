import React, { useEffect } from "react";
import { storage } from "./StorageConfig";
import { ref, getDownloadURL } from "firebase/storage";

/**
 * Utility function to fetch data from Firebase Storage.
 * @function getData
 * @param {string} key - The key to identify the data in Firebase Storage.
 * @returns {Promise<Object>} - A Promise that resolves to the fetched data.
 */
const getData = async (key) => {
  try {
    //console.log(key);
    // Create a reference to the storage location using the provided key
    const storageRef = ref(storage, key);
    // Get the download URL for the data
    const url = await getDownloadURL(storageRef);
    // Fetch the data using the obtained URL
    const response = await fetch(url);
    // Parse the response as JSON
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error in StorageService: " + error);
  }
};

// Export the getData utility function as the default export
export default getData;
