import React, { useEffect } from "react"
import { storage } from "./StorageConfig"
import { ref, getDownloadURL } from "firebase/storage"

const getData = async (key) => {
  /*  try {
        console.log(key);

        const storageRef = ref(storage, key);
        const url = await getDownloadURL(storageRef);
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        return data;

    } catch (error) {
        console.error("Error in StorageService: " + error);
    }*/
}

export default getData;