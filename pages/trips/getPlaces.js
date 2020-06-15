import React, { useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Head from "next/head";

// If you want to use the provided css
// import 'react-google-places-autocomplete/dist/index.min.css';
 
const key= "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s";

const loadScript = (url) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        console.log('script-1');
      }
    };
  } else {
    script.onload = () => console.log('script-2');
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};


const Component = () => {

    useEffect(() => {
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`);
      }, []);

  return (
        <div>
            <GooglePlacesAutocomplete
            onSelect={console.log}
            apiKey={key}
            idPrefix={'1'}
            />
            <GooglePlacesAutocomplete
            onSelect={console.log}
            apiKey={key}
            idPrefix={'2'}
            />
        </div>
  )};
 
export default Component;