/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { useForm, ErrorMessage } from "react-hook-form";

import trips from "./trips.json";
import transportCompanies from "./transportCompanies.json";
import transporters from "./riders.json";
import Layout from "../../components/Layout";
import { SubmitButton } from "../../components/Buttons";
import MapCard from "../../components/Cards/MapCard";
import { LocationInput, SelectInput} from "../../components/MapInput";
import { Grid, TransportCompany, TransportProvider } from "../../components/Cards/TransportCard";


const Trip = () => {
  // set riders, providers and transport companies from api
  const [provider, setProvider] = useState("");
  const [riders, setRiders] = useState([]);
  const [transportCompany, setTransportCompany] = useState([]);
  const router = useRouter();
  const {id} = router.query;

  const trip = trips[id];

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
    <div className="absolute top-0 right-0 w-screen pb-24">
      {/* Add google map to MapCard */}
      <MapCard />
      <div className="px-4">
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Add click event to LocationInput and make input
            data come from the result of the map selection and
            typed location
          */}
          <LocationInput
            label="start position"
            input={trip.origin}
          />
          <LocationInput
            label="end position"
            input={trip.destination}
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
          <SelectInput placeholder="-- Condition --"
            name="condition"
            options={[
              "None",
              "Blind",
              "Deaf",
              "Pregnant",
              "Cripple",
              "Lame"
            ]}
            ref={register({
              required: "Please select a condition or none"
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
