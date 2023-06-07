import React, { useState, useEffect } from 'react';
import Map from './map.jsx'

const App =() => {
  const [view, setView] = useState("default")
  const [address, setAddress] = useState(null)

  const renderView = () => {
    switch (view) {
      case "default":
        return (
          <div>
            <header>
              <nav>
                <h1>Register</h1>
                <h1>Login</h1>
              </nav>
            </header>
            <Map />
          </div>
        );

    }
  }

  return (
    <div className="App">
      {renderView()}
    </div>
  )
}

export default App