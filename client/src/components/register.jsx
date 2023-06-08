import React,{ useState } from 'react';
import axios from 'axios';

const Register = ({setLatLng, setView}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    passwrd: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    lat: '',
    lng: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmitButtonClick = (e, formData) => {
    e.preventDefault();
    let address = formData.addressLine1 + ' ' + formData.addressLine2 + ' ' + formData.city + ' ' + formData.state + ' ' + formData.zipcode;
    let key = process.env.REACT_APP_GOOGLE_API;
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`)
    .then((result) => {
      console.log('form got this back', result.data.results[0].geometry.location)
      let gridcoord = result.data.results[0].geometry.location;
      setFormData({
        ...formData,
        lat : gridcoord.lat,
        lng : gridcoord.lng
      })
      let info = formData;
      info.lat = gridcoord.lat;
      info.lng = gridcoord.lng;
      setLatLng([info.lat, info.lng])
      axios.post('/users', {params: info})
      setView("default")
    })
    .catch((err) => {
      console.log('Uh Oh ', err)
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
        Password:
        <input name='passwrd' type='text' value={formData.passwrd} onChange={(e) => handleChange(e)} required />
      </label>
      <label>
        Address Line 1:
        <input name='addressLine1' type='text' value={formData.addressLine1} onChange={(e) => handleChange(e)} required />
      </label>
      <label>
        Address Line 2:
        <input name='addressLine2' type='text' value={formData.addressLine2} onChange={(e) => handleChange(e)} />
      </label>
      <label>
        City:
        <input name='city' type='text' value={formData.city} onChange={(e) => handleChange(e)} required/>
      </label>
      <label>
        State:
        <input name='state' type='text' value={formData.state} onChange={(e) => handleChange(e)} required/>
      </label>
      <label>
        Zipcode:
        <input name='zipcode' type='number' value={formData.zipcode} onChange={(e) => handleChange(e)} required/>
      </label>
      <input type='submit' value='Submit' />
    </form>
  </div>
  )
}

export default Register;