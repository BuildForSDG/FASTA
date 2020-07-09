/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-camelcase */
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useForm, ErrorMessage } from "react-hook-form";

import trips from "./trips.json";
import transportCompanies from "./transportCompanies.json";
import transporters from "./riders.json";
import Layout from "../../components/Layout";
import { SubmitButton } from "../../components/Buttons";
import Map from "../../components/Map";
// import MapCard from "../../components/Cards/MapCard";
import { LocationInput, SelectInput} from "../../components/MapInput";
import { Grid, TransportCompany, TransportProvider } from "../../components/Cards/TransportCard";


const Trip = (props) => {
  console.log(props);
  const [trip, setTrip] = useState(null);
  const [location, setLocation] = useState({lat: 5.4, lng: 3.2});
  // set riders, providers and transport companies from api
  const [provider, setProvider] = useState("");
  const [riders, setRiders] = useState([]);
  const [transportCompany, setTransportCompany] = useState([]);

  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    // effect
    props.setTrips(props.trips);
  const trip = props.trips.filter((x) => x["_id"] === id);
  // const trip = {_id:  "5ee8e622eedc07001766d350", mode: "road", origin: "Sagamu", originLatLng: "Object", lat: 6.8322014, lng: 3.6319131, originLocation: "32 Deeper Life S, Sabo, Sagamu, Nigeria", destination: "Lagos", destinationLatLng: Object, destinationLocation: "21 Kayode St, Abule ijesha 100001, Lagos, Nigeria", isVulnerable: "Regular user", tripDistance: "46.3 mi", tripDuration: "1 hour 30 mins", tripTime: "2020-06-16T17:32", userId: "5ec5006bd26329001715617d", date: "2020-06-16T15:32:50.100+00:00"};  
  
    setTrip(trip[0]);
    console.log(trip, props.getTrips);
    return () => {
      // cleanup
    };
  }, []);
  

  // const trip = trips[id];

  const makeProvider = (e) => {
    const {providerID} = e.target;
    setProvider(providerID);
  };

  // eslint-disable-next-line consistent-return
  const modeOfTransport = (e) => {
    const {value} = e.target;

    try {
      if (value === "Transport Company" ) {
        setTransportCompany(transportCompanies);
        setRiders([]);
      } else if (value === "Hail Taxi on Fasta") {
        setRiders(transporters);
        setTransportCompany([]);
      } else {
        setRiders([]);
        setTransportCompany([]);
      }
    } catch (error) {
      return error;
    }
  };

  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
  const onSubmit = () => {
    // console.log(data);
    Router.push("/trips/ongoing-trip");
  };

  return (
    <Layout header="Start trip" back>
    <div className="absolute top-20 right-0 w-screen pb-24">
      {/* Add google map to MapCard */}
      <div><Map lat={props.location && props.location.lat} lng={props.location && props.location.lng} /></div>
      {/* <MapCard /> */}
      <div className="px-4">
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Add click event to LocationInput and make input
            data come from the result of the map selection and
            typed location
          */}
          <LocationInput
            label="start position"
            input={trip && trip.origin}
          />
          <LocationInput
            label="end position"
            input={trip && trip.destination}
          />

          <p style={{ color: "#2699FB" }} className="text-xs mb-2">
            Select mode of transport
          </p>

          {/* Add ref from react-hook-forms */}
          <SelectInput placeholder="-- Mode of Transport --"
            onChange={modeOfTransport}
            name="modeOfTransport"
            options={[
              "Trekking",
              "Private Vehicle",
              "Bus",
              "Taxi",
              "Transport Company",
              "Train",
              "Airport",
              "Waterways",
              "Hail Taxi on Fasta"
            ]}
            ref={register({
              required: "Please select a mode of transport"
            })}
          />
            <ErrorMessage errors={errors} name="modeOfTransport">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type} className="text-xs text-red-500 text-center my-2">
                    {message}
                  </p>
                ))}
            </ErrorMessage>

              {/* Renders the Transport Companies */}
              {transportCompany.length > 0 && (
                <>
                  <p style={{ color: "#2699FB" }} className="text-xs mb-2">
                    Transport Companies around you
                  </p>
                  <Grid>
                    {transportCompanies.map((company, idx) => (
                      <TransportCompany
                        key={idx}
                        id={company.id}
                        business_name={company.business_name}
                        services={company.services}
                        status={company.status}
                        distance={company.distance}
                        onClick={makeProvider}
                      />
                    ))}
                  </Grid>
                </>
              )}

              {/* Renders the Transport Providers */}
              {riders.length > 0 && (
                <>
                  <p style={{ color: "#2699FB" }} className="text-xs mb-2">
                    Transport Providers around you
                  </p>
                  <Grid>
                    {riders.map((rider, idx) => (
                      <TransportProvider
                        key={idx}
                        business_name={rider.business_name}
                        vehicle_type={rider.vehicle_type}
                        status={rider.status}
                        distance={rider.distance}
                        phone={rider.phone}
                      />
                    ))}
                  </Grid>
                </>

              )}

          <p style={{ color: "#2699FB" }} className="text-xs mb-2 mt-6">
            Select health condition if any
          </p>

          {/* Add ref from react-hook-forms */}
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

          <SubmitButton type="submit" className="w-full mt-2">
            Start Trip
          </SubmitButton>
        </form>
          </div>
      </div>
  </Layout>
  );
};

export default Trip;
