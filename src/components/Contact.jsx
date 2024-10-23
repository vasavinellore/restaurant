import React, { useState } from 'react';

const ContactPage = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div style={styles.container}>
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Do you have any questions? Then simply contact us
      </h1>
      <div ClassName='sk' style={styles.flexContainer}>
        {/* Map Section */}
        <div style={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093393!2d144.95373531584404!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1637187473505!5m2!1sen!2sus"
            width="100%"
            height="400px"
            
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div style={styles.formContainer}>
          {submitted ? (
            <div style={styles.successMessage}>
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                />
              </div>
              <button type="submit" style={styles.button}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// Define styles
const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0px 20px 60px 20px',
    borderRadius: '8px',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px', // Add some space between the map and the form
  },
  mapContainer: {
    flex: '1',
    minWidth: '300px',
    height: '100%',
  },
  formContainer: {
    flex: '1',
    minWidth: '300px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop:'40px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  iframe: {
    marginTop:'20p',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '200px',
  },
  successMessage: {
    fontSize: '18px',
    color: '#28a745',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  

};

export default ContactPage;
