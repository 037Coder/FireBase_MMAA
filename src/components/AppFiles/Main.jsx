// Import necessary components and stylesheets
import React, { useState } from 'react';
import './../../stylesheets/Main.css';
import './../../stylesheets/Phone.css'
import SearchLeft from './Search-Left';
import SearchRight from './Search-Right';
import Center from './Center';
import ListAllObjects from '../../utils/BucketList';
import { Link } from 'react-router-dom';
import ChartMenu from '../Charts/ChartMenu';


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

  // State to manage leftOption and rightOption respectively
  const [leftOption, setLeftOption] = useState('All Fights');
  const [rightOption, setRightOption] = useState('All Fights');

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

  const handleRightOption = (option) => {
    setRightOption(option)
  }

  const handleLeftOption = (option) => {
    setLeftOption(option)
  }
  // Render the Main component
  return (

    <main className="main_container" >
      {/* Left side of the main container */}
      <div className="search" id="search-left">
        <SearchLeft
          listOfNames={list}
          onObjectFetched={handleLeftObjectFetched}
          option={handleLeftOption} /> 
          {/* Render SearchLeft component */}
      </div>

      {/* Middle section of the main container */}
      <div className='middle'>
        <h1 className="appTitle" id='top'>MMA Analytica</h1>
        <p className="subInfo">Please read our
          <Link to='/disclaimer'> disclaimer </Link>
          page.
        </p>
        <p className='subInfo'>For more information on the datapoints see our
          <Link to='/'> calculations </Link>
          page.
        </p>
        {/*<NameList onNamesLoaded={handleNamesLoaded} />*/}
        <ListAllObjects onNamesLoaded={handleNamesLoaded} />
        <ChartMenu/>
        <Center
          rightObject={rightObject}
          leftObject={leftObject}
          leftOption={leftOption}
          rightOption={rightOption} /> {/* Render Center component */}
      </div>

      {/* Right side of the main container */}
      <div className="search" id="search-right">
        <SearchRight
          listOfNames={list}
          onObjectFetched={handleRightObjectFetched}
          option={handleRightOption}
          /> {/* Render SearchRight component */}
      </div>
    </main>
  );
};

export default Main; // Export the Main component