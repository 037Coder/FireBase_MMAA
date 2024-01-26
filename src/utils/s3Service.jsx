import { getStorage, ref, listAll } from "firebase/storage";


/**
 * Fetches data from Amazon S3 bucket.
 *
 * @param {string} key - The object key in the S3 bucket.
 * @returns {Promise<Object>} - A promise that resolves to the retrieved data.
 * @throws {Error} - Throws an error if there's an issue fetching data from S3.
 */
const fetchDataFromS3 = async (key) => {
  if (key.includes(" ")) {
    console.log('apostrophe key:', key);
    key = key.replace(" ", "-");
    console.log('new key:', key);
  }

  console.log('Fetching data from S3 for ' + key);
  //console.log()

  return key;
  try {
    // Send the command and wait for the response
    const response = await s3Client.send(getObjectCommand);
    // Use streamReader to read the stream and obtain the content
    const data = await response.Body.transformToString();
    console.log('Retrieved Data for:', key);
    console.log('Data:', data); // Log the data to the console (for debugging)
    console.log('Data Type:', typeof data); // Log the data type to the console (for debugging)
    console.log('Data Length:', data.length); // Log the data length to the console (for debugging)

    //return data;
  } catch (error) {
    console.error('Error fetching data from S3:', error);
    throw error;

  }
}

export default fetchDataFromS3;