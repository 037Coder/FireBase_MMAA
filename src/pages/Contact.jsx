
// Import the 'Header', 'Footer', and Stylesheet
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import './../stylesheets/Pages.css';
import LogoButton from '../shared/logo-button';

const Contact = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="information-section">
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <LogoButton />
      </div>
      
      <Footer />
    </div>
  );
}

export default Contact;