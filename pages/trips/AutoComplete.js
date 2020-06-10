import React, { useState, useEffect } from 'react';
import GooglePlacesAutocomplete, {geocodeByPlaceId, geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
// import 'react-google-places-autocomplete/dist/index.min.css';

const AutoComplete = (props) => {
    const [ googleMapsReady, setGoogleMapsReady ] = useState(false);

    useEffect(() => {

        const loadGoogleMaps = callback => {
            const existingScript = document.getElementById("googlePlacesScript");
            if (!existingScript) {
                const script = document.createElement("script");
                script.src =
                    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s&libraries=places";
                script.id = "googleMaps";
                document.body.appendChild(script);
                //action to do after a script is loaded in our case setState
                script.onload = () => {
                    if (callback) callback();
                };
            }
            if (existingScript && callback) callback();
        };
       const unloadGoogleMaps = () => {
            let googlePlacesScript = document.getElementById("googlePlacesScript");
            if (googlePlacesScript) {
                googlePlacesScript.remove();
            }
        };
        loadGoogleMaps(() => {
            // Work to do after the library loads.
            setGoogleMapsReady(true);
          });
          return unloadGoogleMaps();
    }, []);

    if (!googleMapsReady) {
        return <p>Loading</p>;
    }
  return (<div>
    <GooglePlacesAutocomplete
      placeholder={props.placeholder}
    //   onSelect={({ description, place_id }) => (
    //     console.log(description, place_id)
    //   )}
      onSelect={props.onSelect}
    />
  </div>)
};
 
export default AutoComplete;
  