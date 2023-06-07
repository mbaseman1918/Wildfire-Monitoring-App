import React, { useEffect } from 'react';
import { loadModules } from 'esri-loader';
// import esriConfig from '@arcgis/core/config.js'

export const useCreateMap = (mapRef) => {
  console.log(process.env.NODE_ENV)
  useEffect(() => {
    const initializeMap = async (mapRef) => {
      const modules = ["esri/WebMap", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/config", "esri/widgets/ScaleBar", "esri/widgets/Legend", "esri/widgets/Search"];
      const [WebMap, MapView, Graphic, GraphicsLayer, esriConfig, ScaleBar, Legend, Search] = await loadModules(modules);
      esriConfig.apiKey = process.env.REACT_APP_API
      const webmap = new WebMap({
        portalItem: {
          id: "a8fbe43c4c034bde9f2d8a1165b8b681"
        }
      });
      const view = new MapView({
        map: webmap,
        container: mapRef.current,
      });

      const scalebar = new ScaleBar({
        view: view
      });

      view.ui.add(scalebar, "bottom-left");

      const legend = new Legend ({
        view: view
      });
      view.ui.add(legend, "top-right")

      const search = new Search ({
        view: view
      });
      view.ui.add (search, "top-right")

      const graphicsLayer = new GraphicsLayer();
      webmap.add(graphicsLayer);

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

    // return () => view?.destroy();
  }, [mapRef])
};