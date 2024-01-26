import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import About from './pages/About';
import Calculations from './pages/Calculations'
import App from './pages/MMAA';

function Routes() {
    return (
        <Routes>
            <Route path="/" exact component={Home} />
        </Routes>
    );
}

export default Routes;
