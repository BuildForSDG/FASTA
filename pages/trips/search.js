import React, { useRef, useEffect } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

const key= "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s";

const loadScript = (url) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        console.log('script');
      }
    };
  } else {
    script.onload = () => console.log('script');
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: { /* Define search scope here */ },
    debounce: 300
  });
  const ref = useRef();
  useOnclickOutside(ref, () => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    // getGeocode({ address: description })
    //   .then(results => getLatLng(results[0]))
    //   .then(({ lat, lng }) => {
    //     console.log('📍 Coordinates: ', { lat, lng });
    //   }).catch(error => {
    //     console.log('😱 Error: ', error)
    //   });
  };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li
          key={id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
    useEffect(() => {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`);
    }, []);
  return (
    <div ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;