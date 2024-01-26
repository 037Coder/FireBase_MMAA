import React, { useState, useEffect } from 'react';
import fetchDataFromS3 from './s3Service';

// Define the key for the S3 object
const objKey = '0000.json';

/**
 * NameList component for fetching and managing a list of names from an S3 object.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onNamesLoaded - Callback function invoked when names are loaded.
 * @returns {JSX.Element} - NameList component JSX.
 */
const NameList = ({ onNamesLoaded }) => {
  // State to manage the list of names
  const [names, setNames] = useState([]);
  // State to manage errors during data fetching
  const [error, setError] = useState(null);

  /**
   * Effect hook to fetch data from S3 when the component mounts.
   */
  useEffect(() => {
    fetchDataFromS3(objKey)
      .then((stream) => {
        // Convert the ReadableStream to a string
        return new Response(stream).text();
      })
      .then((data) => {
        // Update the state with the retrieved JSON object's Names array
        setNames(JSON.parse(data).Names);
        // Invoke the onNamesLoaded callback with the loaded names
        onNamesLoaded(JSON.parse(data).Names);
        //console.log("Fighter NameList: ");
        //console.log(JSON.parse(data).Names); 
      })
      .catch((err) => {
        // Update the state with the error
        setError(err.message);
        console.log(error); // Log the error message for debugging purposes
      });
  }, []); // Dependency array to ensure the effect runs when onNamesLoaded changes

  // Component renders null as it doesn't output any UI elements
  return null;
};

// Export the NameList component as the default export
export default NameList;
