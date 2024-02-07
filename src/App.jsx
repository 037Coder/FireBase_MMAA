// Import the 'useState' hook from the 'react' library
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from './shared/CookieConsent';
import ErrorBoundary from './utils/ErrorBoundary';
// Import CSS styles for the 'App' component
import './index.css';

// Use React.lazy to lazily import your components
const Home = lazy(() => import('./pages/Home'));
const MMAA = lazy(() => import('./pages/MMAA'));
const NotFound = lazy(() => import('./pages/404Page'));
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
        {/*<ErrorBoundary>*/}
          {/*<CookieConsent />*/}
          <div className="App">
            {/* Wrap Routes in a Suspense component */}
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mmaa" element={<MMAA />} />
                <Route path="/calculations" element={<Calculations />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        {/*</ErrorBoundary>*/}
      </Router>

    </>
  );
}

// Export the App component as the default export
export default App;