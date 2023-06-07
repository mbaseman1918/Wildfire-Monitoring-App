import React, { useState, useEffect } from 'react';
import Map from './map.jsx'
import Register from './register.jsx'

const App =() => {
  const [view, setView] = useState("default")
  const [address, setAddress] = useState(null)

  const renderView = () => {
    switch (view) {
      case "default":
        return (
          <div>
            <Map />
          </div>
        );
      case "register":
        return (
          <div>
            <Register />
          </div>
        );
      case "login":
        return (
          <div>

          </div>
        );
      default:
        return (
          <div>
            <Map />
          </div>
        )
    }
  }

  return (
    <div className="App">
      <header>
        <nav>
          <h1 onClick={(e) => setView("default")}>Home</h1>
          <h1 onClick={(e) => setView("register")}>Register</h1>
          <h1 onClick={(e) => setView("login")}>Login</h1>
        </nav>
      </header>
      {renderView()}
    </div>
  )
}

export default App