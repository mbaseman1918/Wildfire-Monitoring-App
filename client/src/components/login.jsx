import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    passwrd: ''
  })

  const handleSubmitButtonClick = (e, loginData) => {
    e.preventDefault();
    axios.get('/rsvps', loginData)
    .then((result) => {
      console.log('RSVP posted to DB', result)
    })
    .catch((err) => {
      console.log('Uh Oh ', err)
    })
  }

  return(
    <div>
    <form onSubmit={(e) => handleSubmitButtonClick(e, formData)}>
      <label>
        Email Address:
        <input name='email' type='email' value={formData.email} onChange={(e) => handleChange(e)} required />
      </label>
      <label>
        Password:
        <input name='passwrd' type='text' value={formData.passwrd} onChange={(e) => handleChange(e)} required />
      </label>
      <input type='submit' value='Submit' />
    </form>
  </div>
  )
}