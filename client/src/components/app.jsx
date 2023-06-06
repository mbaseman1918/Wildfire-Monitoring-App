import React, { useState, useEffect } from 'react';
import Map from './map.jsx'

const App =() => {
  const [view, setView] = useState()
  const [address, setAddress] = useState(null)

  return (
    <div className="App">
      <Map />
    </div>
  )
}

export default App