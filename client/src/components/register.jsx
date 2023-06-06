import React,{ useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    passwrd: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  return(
    <div>
    <form onSubmit={(e) => handleSubmitButtonClick(e, formData)}>
      <label>
        First Name:
        <input name='firstName' type='text' value={formData.firstName} onChange={(e) => handleChange(e)} required />
      </label>
      <label>
        Last Name:
        <input name='lastName' type='text' value={formData.lastName} onChange={(e) => handleChange(e)} required />
      </label>
      <label>
        Email Address:
        <input name='email' type='email' value={formData.email} onChange={(e) => handleChange(e)} required />
      </label>
      <label>
        Number of Guests:
        <input name='guests' type='number' value={formData.guests} onChange={(e) => handleChange(e)} required />
      </label>
      <input type='submit' value='Submit' />
    </form>
  </div>
  )
}