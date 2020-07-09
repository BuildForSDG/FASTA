/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
 } from "react-places-autocomplete";
import { useForm, ErrorMessage } from "react-hook-form";
import Router from "next/router";
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-nextjs-toast";

const handleToast = (msg, type = "info") => toast.notify(msg, { duration: 5, type });

import Layout from "../../components/Layout";
import { SubmitButton, LoaderContainer } from "../../components/Buttons";
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
  const [origin, setOrigin] = useState({});
  const [originText, setOriginText] = useState("");
  const [destination, setDestination] = useState({});
  const [destinationText, setDestinationText] = useState("");
  // const [address, setAddress] = useState({});
 
  if (scheduled) {
    Router.push("/trip");
  }

  const apiUrl = props.getUrl();
  // const key= "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s";
  // const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;

  console.log(props.location);

  const loadScript = (url) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
 
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          console.log("script-1");
        }
      };
    } else {
      script.onload = () => console.log("script-2");
    }
 
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
   const key= "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s";
   const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
  //  loadScript(scriptUrl);

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
        const key= "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s";
        const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
        // loadScript(scriptUrl);
    return () => {
    //   // cleanup
    };
  }, []);

  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });

  const renderFuncOrigin = ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
    <div>
      <TypeInput {...getInputProps()}
                      type="text"
                      name="origin"
                      placeholder="Start from ..."
                      ref={register({
                        required: "Please enter your takeoff location"
                      })}
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
            <div>
        {loading && <div>Loading...</div>}
        {suggestions.map((suggestion) => {
          const style = { backgroundColor: suggestion.active ? "#fafafa" : "#fff"};
          return (<div {...getSuggestionItemProps(suggestion, { style })}>
            <span>{suggestion.description}</span>
          </div>)
        })}
      </div>
    </div>
  );

  const renderFuncDestination = ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
    <div>
      <TypeInput {...getInputProps()}
                      type="text"
                      name="destination"
                      placeholder="Stop at ..."
                      // value=""
                      ref={register({
                        required: "Please enter your preferred destination"
                      })}
                    />
            <ErrorMessage errors={errors} name="destination">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
            </ErrorMessage>      
            <div>
        {loading && <div>Loading...</div>}
        {suggestions.map(suggestion => {
          const style = { backgroundColor: suggestion.active ? "#fafafa" : "#fff"}
          return (<div {...getSuggestionItemProps(suggestion, { style })}>
            <span>{suggestion.description}</span>
          </div>)
        })}
      </div>
    </div>
  );

  // const onBlur = async (e) => {
  //   const name = e.target.name; 
  //   const val = e.target.value;
  //   console.log(name, val);
  //   // const placesUrl = `${placesPath}${val}&key=${key}`;
  //   try {
  //       const place = await fetch(`${apiUrl}/getplaces/${val}`);
  //       const placeResponse = await place.json();
  //       console.log(placeResponse);
  //       if (name === "origin") {
  //         setOrigin(placeResponse.results[0].geometry.location);
  //       } else if (name === "destination") {
  //         setDestination(placeResponse.results[0].geometry.location);
  //       } else {
  //       console.log(origin, destination, placesUrl);
  //       }
  //       return;
  //   } catch(e) {
  //     // console.log(e);
  //     // handleToast("Error in connection", "error");
  //   }
  // };

  console.log(origin, destination);

  const onSubmit = (e) => {
    console.log(e);    
    setLoading(true);
    (async () => {
      try {
        const transporter = await handleFetch(`${apiUrl}/gettransporters`, "POST", {origin});
        const transporterResponse = transporter.response;
        // console.log(transporterResponse.results);
        const transporterList = transporterResponse.results.map((t) => {
         
         const { name, formatted_address, geometry, icon } = t;
         return {name, formatted_address, geometry, icon };
         console.log(transporterList);
        });
        // return;
      } catch(e) {
        handleToast("Error in connection", "error");
      }

      try {
        const distanceMatrix  = await handleFetch(`${apiUrl}/getdistances`, "POST", {origin, destination});
          const distanceMatrixResponse = distanceMatrix.response;
          console.log(distanceMatrixResponse, distanceMatrixResponse.rows[0].elements[0]);
          const { distance, duration } = distanceMatrixResponse.rows[0].elements[0];
          const { origin_addresses, destination_addresses } = distanceMatrixResponse;

          const tripDetails = {mode: "road", 
                              // origin: e.origin,
                              origin: originText,
                              originLatLng: origin,
                              originLocation: origin_addresses[0],
                              // destination: e.destination, 
                              destination: destinationText, 
                              destinationLatLng: destination, 
                              destinationLocation: destination_addresses[0], 
                              isVulnerable: e.condition, 
                              tripDistance: distance.text, 
                              tripDuration: duration.text, 
                              tripTime: e.tripTime};
          const newTrip = await handleFetch(`${apiUrl}/schedule-a-trip`, "POST", tripDetails, props.token);
          console.log(tripDetails, newTrip);
          if (newTrip.status === 200) {
            setLoading(false);
            setScheduled(true);
            console.log("Trip has been scheduled");
            return;
          } else {
            setLoading(false);
            setScheduled(false);
            return;
          }
      } catch(e) {
        console.log(e);
        // handleToast("Error in connection", "error");
        return;
      }
    })();

  };

  const handleSelectOrigin = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(value, latLng);
    setOriginText(value);
    setOrigin(latLng);
  }

  const handleSelectDestination = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    console.log(results, latLng);
    setDestinationText(value);
    setDestination(latLng);
  }

  return (
    <Layout header="Schedule a trip" url={scriptUrl} back>
      <div className="absolute top-20 right-0 w-screen mb-24">
        {/* Add google map to MapCard */}
        <Map lat={props.location &&props.location.lat} lng={props.location && props.location.lng} />
        <div className="px-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Add click event to LocationInput and make input
              data come from the result of the map selection and
              typed location
            */}
            <p style={{ color: "#2699FB" }} className="text-xs capitalize mb-2">
              Take-off point
            </p>
            {/* // In render function */}
            <PlacesAutocomplete value={origin} onChange={setOrigin} onSelect={handleSelectOrigin} >
              {renderFuncOrigin}
            </PlacesAutocomplete>
            
            <p style={{ color: "#2699FB" }} className="text-xs capitalize mb-2">
              Destination
            </p>
            <PlacesAutocomplete value={destination} onChange={setDestination} onSelect={handleSelectDestination} >
              {renderFuncDestination}
            </PlacesAutocomplete>

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
                "Driving",
                "Walking",
                "Bicycling",
                "Transit"
              ]}
              ref={register({
                required: "Please select the preferred mode"
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
