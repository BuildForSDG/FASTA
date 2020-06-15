/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useForm, ErrorMessage } from "react-hook-form";
import Router from "next/router";
import BeatLoader from "react-spinners/BeatLoader";
// import distance from 'google-distance-matrix';
// import places from "./places";
// import distanceData from "./distanceMatrix";

import Layout from "../../components/Layout";
import { SubmitButton, LoaderContainer } from "../../components/Buttons";
// import MapCard from "../../components/Cards/MapCard";
import Map from "../../components/Map";
import { TypeInput, SelectInput} from "../../components/MapInput";

const handleFetch = async (url, method, body, token) => {
  console.log(body);
  const res = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", 
               "Authorization": `Bearer ${token}`
              }
  });
  const response = await res.json();
  console.log(res.status, response);
  return { status: res.status, response };
};

const NewTrip = (props) => {
  const [loading, setLoading] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
 
  if (scheduled) {
    Router.push("/trip");
  }

  const apiUrl = props.getUrl();
  // const apiUrl = "http://localhost:8080/api/v1";

  useEffect(() => {
    // effect
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

    // loadScript(
    //   `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`);
    return () => {
      // cleanup
    };
  }, []);

  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });


  const location = {lat: 6.33, lng: 3.33};
  console.log(location, props);
  // path: `transport&location=${this.latitude},${this.longitude}&radius=10000&
  
  const key= "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s";
  // const key= "AIzaSyDWLwUNUCh-ON8nTTvdKd6VVlDZDquwi-I";
  const distancePath = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&";
  const placesPath = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";

//   distance.key(key);
// var origins = ['San Francisco CA'];
// var destinations = ['New York NY', '41.8337329,-87.7321554'];
 
// distance.matrix(origins, destinations, function (err, distances) {
//     if (!err)
//         console.log(distances);
// })

  const onBlur = async (e) => {
    const name = e.target.name; 
    const val = e.target.value;
    console.log(name, val);
    const placesUrl = `${placesPath}${val}&key=${key}`;
    try {
        // const placeResponse = await handleFetch(`${apiUrl}/getplaces/${val}`, 'GET');
        const place = await fetch(placesUrl
          // , {method: "GET", mode: "cors", credentials: "include",
        // headers: { "Content-Type": "application/json", "Accept": "*" } }
        );
        const placeResponse = await place.json();
        console.log(placeResponse);
        // console.log(places[val]);
        if (name === "origin") {
          setOrigin(placeResponse.results[0].geometry.location);
        } else if (name === "destination") {
          setDestination(placeResponse.results[0].geometry.location);
        } else {
        console.log(origin, destination, placesUrl);
        }
        return;
    } catch(e) {
      console.log(e);
    }
  };

  console.log(origin, destination);

  const onSubmit = (e) => {
    console.log(e);    
    setLoading(true);
    (async () => {
      const distanceUrl = `${distancePath}origins=${origin.lat},${origin.lng}&destinations=${destination.lat},${destination.lng}&key=${key}`;
      try {
        // const distanceMatrixResponse  = await handleFetch(`${apiUrl}/trip-distance`, 'POST', {origin, destination});
          const distanceMatrix = await fetch(distanceUrl);
          const distanceMatrixResponse = await distanceMatrix.json();
          // console.log(distanceMatrixResponse);
          // console.log(distanceData, distanceData.rows[0].elements[0], distanceUrl);
          // const { distance, duration } = distanceData.rows[0].elements[0];
          // const { origin_addresses, destination_addresses } = distanceData;
          console.log(distanceMatrixResponse, distanceMatrixResponse.rows[0].elements[0], distanceUrl);
          const { distance, duration } = distanceMatrixResponse.rows[0].elements[0];
          const { origin_addresses, destination_addresses } = distanceMatrixResponse;

          const tripDetails = {mode: "road", 
                              origin: e.origin,
                              originLatLng: origin,
                              originLocation: origin_addresses[0],
                              destination: e.destination, 
                              destinationLatLng: destination, 
                              destinationLocation: destination_addresses[0], 
                              isVulnerable: e.condition, 
                              tripDistance: distance.text, 
                              tripDuration: duration.text, 
                              tripTime: e.tripTime};
          const newTrip = await handleFetch(`${apiUrl}/schedule-a-trip`, 'POST', tripDetails, props.token);
          console.log(newTrip);
          if (newTrip.status === 200) {
            setLoading(false);
            setScheduled(true);
            console.log("Trip has been scheduled");
            return;
          } else {
            setLoading(false);
            setScheduled(false);
          }
          return;
      } catch(e) {
        console.log(e);
      }
      console.log(distanceUrl);
      setLoading(false);
      // console.log("Trip has been scheduled");
    })();
  };

  return (
    <Layout header="Schedule a trip" back>
      <div className="absolute top-20 right-0 w-screen mb-24">
        {/* Add google map to MapCard */}
        {/* <div><Map lat={location.lat} lng={location.lng} /></div> */}
        <div><Map lat={location.lat} lng={location.lng} /></div>
        <div className="px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Add click event to LocationInput and make input
              data come from the result of the map selection and
              typed location
            */}
            <p style={{ color: "#2699FB" }} className="text-xs capitalize mb-2">
              Take-off point
            </p>
            {/* <GooglePlacesAutocomplete
              onSelect={console.log}
              apiKey={key}
              idPrefix={'1'}
              renderInput={(props) => (
                <div className="custom-wrapper">
                  <TypeInput
                    type="text"
                    name="origin"
                    placeholder="Start from ..."
                    ref={register({
                      required: "Please enter your takeoff location"
                    })}
                  />
                </div>
              )}
            /> */}
            <TypeInput
                    type="text"
                    name="origin"
                    placeholder="Start from ..."
                    ref={register({
                      required: "Please enter your takeoff location"
                    })}
                    onBlur={onBlur}
                  />
            <ErrorMessage errors={errors} name="origin">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
            </ErrorMessage>

            <p style={{ color: "#2699FB" }} className="text-xs capitalize mb-2">
              Destination
            </p>
             <TypeInput
                    type="text"
                    name="destination"
                    placeholder="Heading to ..."
                    ref={register({
                      required: "Please enter your destination"
                    })}
                    onBlur={onBlur}
                  />
            {/* <GooglePlacesAutocomplete
              onSelect={({ description }) => (
                console.log({ address: description })
              )}
              apiKey={key}
              idPrefix={'1'}
              renderInput={(props) => (
                <div className="custom-wrapper">
                  <TypeInput
                    type="text"
                    name="destination"
                    placeholder="Heading to ..."
                    ref={register({
                      required: "Please enter your destination"
                    })}
                  />
                </div>
              )}
            /> */}
              <ErrorMessage errors={errors} name="destination">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
            </ErrorMessage>

            <p style={{ color: "#2699FB" }} className="text-xs capitalize mb-2">
              trip date and time
            </p>

            {/* Add ref from react-hook-forms */}
            <TypeInput type="datetime-local"
              name="tripTime"
              ref={register({
                required: "Please enter trip date and time"
              })}
            />
            <ErrorMessage errors={errors} name="tripTime">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-xs text-red-500 text-center my-2">
                    {message}
                  </p>
                ))}
            </ErrorMessage>

            <p style={{ color: "#2699FB" }} className="text-xs mb-2">
              Select your preferred mode
            </p>

            <SelectInput placeholder="--Mode--"
              name="mode"
              options={[
                "Road",
                "Air",
                "Walking"
              ]}
              ref={register({
                required: "Preferred mode"
              })}
            />
            <ErrorMessage errors={errors} name="mode">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
            </ErrorMessage>

            <p style={{ color: "#2699FB" }} className="text-xs mb-2">
              Select health condition if any
            </p>

            <SelectInput placeholder="--Category--"
              name="condition"
              options={[
                "Regular user",
                "Children below 15 years",
                "Adults above 60 years",
                "Pregnant",
                "Have some disability",
              ]}
              ref={register({
                required: "Please select a category"
              })}
            />
            <ErrorMessage errors={errors} name="condition">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
            </ErrorMessage>

            {loading ?
          <LoaderContainer className="w-full mt-6">
            <BeatLoader
            size={30}
            color="#43a047"
            loading
            />
          </LoaderContainer>
          :<SubmitButton type="submit" className="w-full mt-2">
              Schedule Trip
            </SubmitButton>}

          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewTrip;
