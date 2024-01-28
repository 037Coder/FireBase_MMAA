// Import the 'useState' hook from the 'react' library
import { lazy, Suspense } from 'react';

// Import CSS styles for the 'App' component
import './App.css';

// Use React.lazy to lazily import your components
const Home = lazy(() => import('./pages/Home'));
const MMAA = lazy(() => import('./pages/MMAA'));
const About = lazy(() => import('./pages/About'));
const Calculations = lazy(() => import('./pages/Calculations'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Contact = lazy(() => import('./pages/Contact'));

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
        <CookieConsent />
        <div className="App">
          {/* Wrap Routes in a Suspense component */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mmaa" element={<MMAA />} />
              <Route path="/about" element={<About />} />
              <Route path="/calculations" element={<Calculations />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </Router>

    </>
  );
}

// Export the App component as the default export
export default App;