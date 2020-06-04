/* eslint no-unused-vars */
import React from "react";
import ReactMap from "google-map-react";
// import env from "dotenv";
// env.config();

const MapComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  //  console.log(process.env.apiKey);
  return (
    <div style={{ height: "30vh", width: "100%" }}>
      <ReactMap
        bootstrapURLKeys={{ key: process.env.apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapComponent lat={props.lat} lng={props.lng} text="Map View" />
      </ReactMap>
    </div>
  );
};

export default Map;
