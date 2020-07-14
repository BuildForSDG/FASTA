/* eslint no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactMap from "google-map-react";
// import env from "dotenv";
// env.config();

const MapComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng }) => {
  const [pointer, setPointer] = useState({lat, lng})
  const defaultProps = {
    center: {
      lat,
      lng
    },
    zoom: 16
  };

  useEffect(() => {
    setPointer({lat, lng});
  },[lat, lng]);

  return (
    <div style={{ height: "30vh", width: "100%" }}>
      <ReactMap
        bootstrapURLKeys={{ key: process.env.apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapComponent lat={lat} lng={lng} text="Map View" />
      </ReactMap>
    </div>
  );
};

export default Map;
