import { useState } from 'react';
// Import the 'Header', 'Footer', and Stylesheet
import Header from './../shared/Header';
import Footer from './../shared/Footer';
import ContactForm from './Contact_Temporary';
import { MiniSpacer, Spacer } from './../shared/Spacer'
import './../stylesheets/Pages.css';
import './../stylesheets/Form.css';
import LogoButton from '../shared/logo-button';

const Contact = () => {

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const sendTo = 'company_email@coming.soon';

  const submitForm = (e) => {
    e.preventDefault();

    // Validate form fields here if needed

    // Create the mailto link
    const mailtoLink = `mailto:${sendTo}
    ?subject=${encodeURIComponent(subject)}
    &body=${encodeURIComponent(message)}`;

    // Open the email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="page-container">
      <Header />

      <div className="information-section">
        <h1>Contact Us</h1>
        <ContactForm />
        {/**       <form>
          <label htmlFor="name">Name:</label>
          <input className="contact-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="company">Company:</label>
          <input  className="contact-input"type="company" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />

          <label htmlFor="subject">Subject:</label>
          <select name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="feedback">Feedback</option>
            <option value="requests">Requests</option>
            <option value="collaboration">Collaboration</option>
            <option value="support">Support</option>
            <option value="advertise">Advertise</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

          <button type="submit" onClick={submitForm}>
            <a id='sub-link'
              href={`mailto:${sendTo}?
            subject=${encodeURIComponent(subject)}&
            body=${encodeURIComponent(message)}`}>
              Submit
            </a>
          </button>
        </form>
*/}
        <Spacer />
        <LogoButton />
        <MiniSpacer />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;