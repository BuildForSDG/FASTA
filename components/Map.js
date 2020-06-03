import React from 'react';
import ReactMap from 'google-map-react';
 
const MapComponent = ({ text }) => <div>{text}</div>;
 
const Map = (props) => {

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
    return (
      <div style={{ height: '30vh', width: '100%' }}>
        <ReactMap
          bootstrapURLKeys={{ key: "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MapComponent
            lat={props.lat}
            lng={props.long}
            text="Map View"
          />
        </ReactMap>
      </div>
    );
}
 
export default Map;