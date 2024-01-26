import React, { useState } from 'react';
import Downshift from 'downshift'; // Importing the useCombobox hook from downshift
import { FaSearch } from 'react-icons/fa';
import './../../stylesheets/Search.css'
import Adspace from './../Ads/Side-Adspace'; // Assuming you have an Adspace component
import getData from './../../utils/StorageService'


/**
 * SearchRight component for displaying a list of names and handling name selection.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onSelect - Callback function invoked when a name is selected.
 * @returns {JSX.Element} - SearchRight component JSX.
 */
const SearchRight = ({ listOfNames, onObjectFetched }) => {
  const items = listOfNames || [];

  const handleNameSelect = async (name) => {
    let inCache = false;
    const cachedData = sessionStorage.getItem(name);

    if (cachedData) {
      // Data exists in sessionStorage
      inCache = true;
      console.log("Data collected from Session.Storage")
      onObjectFetched(cachedData);
    } else {
      try {
        const object = await getData(name);
        onObjectFetched(JSON.stringify(object));
        sessionStorage.setItem(name, JSON.stringify(object));
      } catch (error) {
        console.error('Error fetching object:', error);
      }
    }
  };

  return (
    <div className='search-panel'>
      <Downshift
        itemToString={(item) => (item ? item.name : '')} // Assuming the item is an object with a "name" property
        onChange={(selectedItem) => {
          handleNameSelect(selectedItem.url);
        }}
      >
        {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, highlightedIndex, selectedItem }) => (
          <div className="input-wrapper">
            <FaSearch className="search-icon" id='search-icon-right' />

            <input
              {...getInputProps({
                placeholder: 'Search Right...',
              })}
              className="search-input" id='search-box-right'
            />

            {inputValue.length >= 3 && isOpen ? (
              <div className="autocomplete-menu" {...getMenuProps()}>
                {items
                  .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
                  .map((item, index) => (
                    <div
                      {...getItemProps({
                        key: item.name,
                        index,
                        item,
                        style: {
                          fontFamily: 'Arial',
                          backgroundColor: highlightedIndex === index ? '#7da897' : 'white',
                          fontWeight: selectedItem === item ? 'bolder' : 'lighter',
                          borderBottom: '0.1vh solid #3a8869',
                          borderRadius: '0.7vh',
                          fontSize: '0.8em',
                        },
                      })}
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
      <Adspace />
    </div>
  );
};

export default SearchRight;