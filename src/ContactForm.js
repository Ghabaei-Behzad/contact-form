// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 11A - React Contact Form
// ContactForm.js - App.js
// Instructor Seno
// Feb. 10, 2026

// useState is a React Hook that lets you add a state variable
// to your component. Use "code ." in bash file to open.
import React, { useState } from 'react';

/*
* The convention is to name state variables like
* [something, setSomething] using array destructuring.
* (copying items into variables, and the array
* isn't modified.) (javascript.info)
* useState returns an array with exactly two values:
* 1. The current state. During the first render, it will match the
* initialState you have passed.
* 2. The setter function that lets you update the state to a different
* value and trigger a re-render.
* The three useState arrays below are initialized with 
* formData, submittedData, and errors.
* We included phone number in the form {name, email, phone, message}
 */ 

function ContactForm() {
  // Added 'phone' to the initial state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  /*
  * Our three functions to handle the events are
  * handleChange, validate, and handleSubmit. 
  * We are sure the functions inside only run when 
  * the button is clicked.
  * 1. formData (Input State) Tracks exactly what the
  * user is typing into the fields.
  * The initial value is an object with empty strings:
  * { name: '', email: '', phone: '', message: '' }.
  * This changes every time a user types a character. 
  * The handleChange function updates this state.
  * Lastly, "..." is called "the rest"
  */
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value })); 
  };  
       
    /* 
     * 2. errors (Validation State) stores any validation
     * messages like "Invalid email" if the user forgets
     * a field or types something incorrectly. Initial value 
     * is an empty object {} which changes when user clicks "Submit"
     * The validate() function checks the formData and fills
     * this state with error messages. Phone number uses
     * regular expression, RegEx which is a strict rulebook. 
     */
  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\d{10}$/; // phoneRegex validates exactly 10 digits
    // name validation 
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    // email validation 
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    
    // phone validation (New logic included)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }
    // message validation 
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

 /* 
  * 3. submittedData (Display State) stores data only
  * after the form is successfully validated and submitted with
  * initial Value: null.
  * Once the form passes all checks,
  * setSubmittedData(formData) is called, which triggers
  * the JSON block to appear at the bottom of your screen.
  */ 
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      // Clear form including phone
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  /*
   * 1. Container. This is The UI.  In the return block everything
   * is wrapped in a single <div>. 
   * React requires a component to return a single parent element. 
   * If you removed that outer <div>, the code would crash.
   * 2. Conditional Rendering &&. Conditional AND operator says
   * show this entire div if submittedData is NOT null.
   * 3. Control input.  Each input uses value={formData.name} 
   * tied to state, and onChange handler, to type in the box.
   * 4. Error display, error message is displayed, when the errors object 
   * contains a key for that specific field.
   */
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>  
        <label>Name:<br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{color: 'red', fontSize: '12px'}}>{errors.name}</p>}
        </label><br /><br />

        <label>Email:<br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{color: 'red', fontSize: '12px'}}>{errors.email}</p>}
        </label><br /><br />

        {/* New Phone Number Input Field */}
        <label>Phone Number:<br />
          <input 
            type="tel" 
            name="phone" 
            placeholder="1234567890"
            value={formData.phone} 
            onChange={handleChange} 
          />
          {errors.phone && <p style={{color: 'red', fontSize: '12px'}}>{errors.phone}</p>}
        </label><br /><br />

        <label>Message:<br />
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <p style={{color: 'red', fontSize: '12px'}}>{errors.message}</p>}
        </label><br /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
