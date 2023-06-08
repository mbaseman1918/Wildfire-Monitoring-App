import React, { useRef } from 'react';
import { useCreateMap } from './mapBuild.jsx';

const Map = ({latLng}) => {
  const mapRef = useRef(null);
  useCreateMap(mapRef, latLng)

  return (
    <div className="map-view" ref={mapRef} />
  )
};

export default Map;