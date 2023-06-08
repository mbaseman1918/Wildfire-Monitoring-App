import React, { useState } from 'react';
import axios from 'axios';

const Login = ({setLatLng, setView}) => {
  const [loginData, setLoginData] = useState({
    email: '',
    passwrd: ''
  })

  const handleSubmitButtonClick = (e, loginData) => {
    e.preventDefault();
    axios.get('/users', {params: loginData})
    .then((result) => {
      console.log('login got user from DB', result.data.rows[0])
      setLatLng([result.data.rows[0].lat, result.data.rows[0].lng])
      setView("default")
    })
    .catch((err) => {
      console.log('Uh Oh ', err)
    })
  }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }

  return(
    <div>
    <form onSubmit={(e) => handleSubmitButtonClick(e, loginData)}>
      <label>
        Email Address:
        <input name='email' type='email' value={loginData.email} onChange={(e) => handleChange(e)} required />
      </label>
      <label>
        Password:
        <input name='passwrd' type='text' value={loginData.passwrd} onChange={(e) => handleChange(e)} required />
      </label>
      <input type='submit' value='Submit' />
    </form>
  </div>
  )
}

export default Login;
