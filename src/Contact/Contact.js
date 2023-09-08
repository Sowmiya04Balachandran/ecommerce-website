import React from 'react';
import classes from './Contact.module.css';


const Contact = () => {
  async function contacthandler(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create a data object to send to Firebase
    const formData = {
      name,
      email,
      phone,
    };


      const response = await fetch('https://ecommerce-website-1a003-default-rtdb.firebaseio.com/ecommerce.json', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      

      const data = await response.json();
      console.log(data);
    
  }

  return (
    <div className={classes.container}>
      <form onSubmit={contacthandler} className={classes.form}>
      <div>
        <label>Name:</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label>Email Id:</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label>Phone no:</label>
        <input type="number" id="phone" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default Contact;
