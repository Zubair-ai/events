import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailInputRef=useRef();
  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    const enteredEmail=emailInputRef.current.value;
    const registeredEmail={ email:enteredEmail};
    fetch('/api/newletter',{
      method:'POST',
      body:JSON.stringify(registeredEmail),
      headers:{
        'Content-Type':'appliaction/json'
      }
    }).then(response=>response.json()).then(data=>console.log(data))
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
          ref={emailInputRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;