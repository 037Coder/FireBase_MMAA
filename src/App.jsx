// Import the 'useState' hook from the 'react' library
import { useState } from 'react';

// Import CSS styles for the 'App' component
import './App.css';

// Import the 'Header', 'Footer', and 'Main' components
import MMAA from './pages/MMAA'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Calculations from './pages/Calculations';
import Disclaimer from './pages/Disclaimer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from './shared/CookieConsent';

/**
 * The main App component.
 * @function App
 * @returns {JSX.Element} The rendered App component.
 */
function App() {

  // Render the component
  return (
    <>
      {/* Main container for the entire app */}
      <Router>

        <div className="App">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path='/mmaa' Component={MMAA} />
            <Route path='/about' Component={About} />
            <Route path='/calculations' Component={Calculations} />
            <Route path='/disclaimer' Component={Disclaimer} />
            <Route path='/contact' Component={Contact} />
          </Routes>
        </div>
      </Router>
      <CookieConsent />
    </>
  );
}

// Export the App component as the default export
export default App;