import React, { useEffect } from 'react';
import { loadModules } from 'esri-loader';
// import esriConfig from '@arcgis/core/config.js'

export const useCreateMap = (mapRef) => {
  console.log(process.env.NODE_ENV)
  useEffect(() => {
    let view;
    let graphicsLayer;

    const initializeMap = async (mapRef) => {
      const modules = ["esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/config"];
      const [Map, MapView, Graphic, GraphicsLayer, esriConfig] = await loadModules(modules);
      esriConfig.apiKey = process.env.REACT_APP_API
      const map = new Map({ basemap: "arcgis-topographic" })
      view = new MapView({
        map: map,
        zoom: 7,
        container: mapRef.current,
        center: [-120, 45],
      });

      graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      const point = {
        type: "point",
        longitude: -120,
        latitude: 45
      };
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol
      });
      graphicsLayer.add(pointGraphic)
    };

    initializeMap(mapRef);

    return () => view?.destroy();
  }, [mapRef])
};