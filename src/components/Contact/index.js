import {useState} from 'react';
import {validateEmail} from '../../utils/helpers';


function Contact() {

  const [formState, setFormState] = useState({name: '', email: '', message: ''});

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  
const handleSubmit = (e) => {
  e.preventDefault();
  if(!errorMessage) {
    console.log('Submit Form', formState);
  }
};

const handleChange = (e) => {
  if(e.target.name ==='email') {
    const isValid = validateEmail(e.target.value);
    if(!isValid) {
      setErrorMessage('Invalid Email!')
    } else {
      setErrorMessage('');
    }
  } else {
    if(!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`)
    } else {
      setErrorMessage('');
    }
  }
  if (!errorMessage) {
    setFormState({...formState, [e.target.name]: e.target.value});
    console.log('Handle Form', formState);
  }
}
  return (
    <div>
      <h1>Contact Me</h1>
      <form id="contact-form" className='container' onSubmit={handleSubmit}>
      <div className='flex-row py-2'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
      </div>
      <div className='flex-row py-2'>
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
      </div>
      <div className='flex-row py-2' style={{width: "600px"}}>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
      </div>
      {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact