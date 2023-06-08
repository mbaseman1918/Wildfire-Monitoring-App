import React, { useState, useEffect } from 'react';
import Map from './map.jsx'
import Register from './register.jsx'
import Login from './login.jsx'

const App =() => {
  const [view, setView] = useState("default")
  const [latLng, setLatLng] = useState(null)

  const renderView = () => {
    switch (view) {
      case "default":
        return (
          <div>
            <Map latLng={latLng}/>
          </div>
        );
      case "register":
        return (
          <div className="register">
            <Register setLatLng={setLatLng} setView={setView}/>
          </div>
        );
      case "login":
        return (
          <div className="login">
            <Login setLatLng={setLatLng} setView={setView}/>
          </div>
        );
      default:
        return (
          <div>
            <Map latLng={latLng}/>
          </div>
        )
    }
  }

  return (
    <div className="App">
      <header>
        <h1>WILDFIRE MONITOR</h1>
        <nav>
          <h2 onClick={(e) => setView("default")}>Home</h2>
          <h2 onClick={(e) => setView("register")}>Register</h2>
          <h2 onClick={(e) => setView("login")}>Login</h2>
        </nav>
      </header>
      {renderView()}
    </div>
  )
}

export default App