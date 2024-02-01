// Import necessary components and stylesheets
import React, { useState } from 'react';
import './../../stylesheets/Main.css';
import './../../stylesheets/Phone.css'
import SearchLeft from './Search-Left';
import SearchRight from './Search-Right';
import Center from './Center';
import ListAllObjects from '../../utils/BucketList';
import { Link } from 'react-router-dom';


/**
 * Main component responsible for integrating other components.
 * @component
 */
const Main = () => {

  // State to manage the list of names
  const [list, setList] = useState([]);

  // State to manage leftObject and rightObject respectively
  const [leftObject, setLeftObject] = useState(null);
  const [rightObject, setRightObject] = useState(null);

  /**
   * Callback function invoked when names are loaded.
   *
   * @param {Array} names - An array of names to be displayed.
   */
  const handleNamesLoaded = (names) => {
    setList(names); // Update the list state with the loaded names
  };

  // Callback function to update state with the fetched object for left side
  const handleLeftObjectFetched = (object) => {
    setLeftObject(object);
  };

  // Callback function to update state with the fetched object for right side
  const handleRightObjectFetched = (object) => {
    //console.log('Fetched object in Main (Right):', object);
    setRightObject(object);
  };

  // Render the Main component
  return (

    <main className="main_container" >
      {/* Left side of the main container */}
      <div className="search" id="search-left">
        <SearchLeft
          listOfNames={list}
          onObjectFetched={handleLeftObjectFetched} /> {/* Render SearchLeft component */}
      </div>

      {/* Middle section of the main container */}
      <div className='middle'>
        <h1>MMA Analytica</h1>
        <h3>Last 5 Fights</h3>
        <p style={{fontSize: '12px', margin: '0'}}>
          for more information on the datapoints see our 
          <Link to='/calculations'> calculations </Link> 
          page.
          </p>
        {/*<NameList onNamesLoaded={handleNamesLoaded} />*/}
        <ListAllObjects onNamesLoaded={handleNamesLoaded}/>
        
        <Center
          rightObject={rightObject}
          leftObject={leftObject} /> {/* Render Center component */}
      </div>

      {/* Right side of the main container */}
      <div className="search" id="search-right">
        <SearchRight
          listOfNames={list}
          onObjectFetched={handleRightObjectFetched} /> {/* Render SearchRight component */}
      </div>
    </main>
  );
};

export default Main; // Export the Main component