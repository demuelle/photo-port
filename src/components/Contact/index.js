import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [ formState, setFormState ] = useState({name:"", email:"", message:""});
    const [ errorMessage, setErrorMessage ] = useState("");

    function updateState(event) {
        let isValid = false;

        if (event.target.name === 'email') {
            isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }
    
        if (!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value});
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formState);
    }

    return (
    <section>
      <h1 data-testid="contact-h1-test">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onBlur={updateState} defaultValue={formState.name} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" onBlur={updateState} defaultValue={formState.email} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" onBlur={updateState} defaultValue={formState.message} />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
        <button data-testid="submit-button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
