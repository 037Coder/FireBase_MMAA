import { ref, listAll } from "firebase/storage";
import { storage } from "./StorageConfig";
import { useState, useEffect } from 'react';

const BucketList = ({ onNamesLoaded }) => {
    const listRef = ref(storage, 'MMAA_Fighters');

    useEffect(() => {
        listAll(listRef)
            .then(async (res) => {
                try {
                    const list = await Promise.all(
                        res.items.map(async (itemRef) => {
                            const name = itemRef.name;
                            const url = await itemRef.fullPath;

                            return {
                                name: name,
                                url: url,
                            };
                        })
                    );
                    onNamesLoaded(list); // Call onNamesLoaded with the updated list
                    //console.log(list); 
                } catch (error) {
                    console.error(error);
                }
            })
            .catch((error) => {
                console.log(error);
            });
            

    }, []); // Empty dependency array to run only once when the component mounts

    // Rest of your component
};

export default BucketList;

