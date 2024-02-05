// Import necessary components and stylesheets
import React from 'react';
import Downshift from 'downshift'; // Importing the useCombobox hook from downshift
import { FaSearch } from 'react-icons/fa';
import './../../stylesheets/Search.css';
import Adspace from './../Ads/Side-Adspace'; // Assuming you have an Adspace component
import getData from './../../utils/StorageService';
import { logSearchEvent } from '../../utils/StorageConfig';

/**
 * SearchLeft component for displaying a list of names and handling name selection.
 * @function SearchLeft
 * @param {Object} props - Component properties.
 * @param {Function} props.onObjectFetched - Callback function invoked when an object is fetched.
 * @param {Array} props.listOfNames - List of names to be displayed in the search panel.
 * @returns {JSX.Element} - SearchLeft component JSX.
 */
const SearchLeft = ({ listOfNames, onObjectFetched }) => {
  const items = listOfNames || [];

  /**
   * Handles the selection of a name, fetching the corresponding object.
   * @function handleNameSelect
   * @param {string} name - The selected name.
   */
  const handleNameSelect = async (name) => {
    let inCache = false;
    const cachedData = sessionStorage.getItem(name);
    logSearchEvent(name)

    if (cachedData) {
      // Data exists in sessionStorage
      inCache = true;
      //console.log("Data collected from Session.Storage");
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
            <FaSearch className="search-icon" id='search-icon-left' />

            <input
              {...getInputProps({
                placeholder: 'Search Left...',
              })}
              className="search-input" id='search-box-left'
            />

            {inputValue.length >= 3 && isOpen ? (
              <div className="autocomplete-menu" {...getMenuProps()}>
                {items
                  .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
                  .map((item, index) => (
                    <div className='search-item'
                      {...getItemProps({
                        key: item.name,
                        index,
                        item,
                        style: {
                          backgroundColor: highlightedIndex === index ? '#7da897' : 'white',
                          fontWeight: selectedItem === item ? 'bolder' : 'lighter',
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
      {<Adspace />}
    </div>


  );
};

// Export the SearchLeft component as the default export
export default SearchLeft;
