import React from 'react';

/**
 * ContactForm component for displaying a contact form embedded from Google Forms.
 * @function ContactForm
 * @returns {JSX.Element} - ContactForm component JSX.
 */
const ContactForm = () => {
    return (
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScWX5mcjIaLXtzIZoKnu2IEULhyXiAszRBO8TWKqHUXFC7MHA/viewform?embedded=true"
            width="100%" height="1207"
        >
            Loading…
        </iframe>
    );
};

// Export the ContactForm component as the default export
export default ContactForm;
