/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import Router from "next/router";

import Layout from "../../components/Layout";
import { SubmitButton } from "../../components/Buttons";
import MapCard from "../../components/Cards/MapCard";
import { LocationInput, TypeInput, SelectInput} from "../../components/MapInput";

const NewTrip = () => {
  // const [trips, setTrips] = useState(null);

  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, []);

  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
  const onSubmit = () => {
    Router.push("/trips/scheduled-trips");
  };

  return (
    <Layout header="Schedule a trip" back>
      <div className="absolute top-0 right-0 w-screen mb-24">
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
              input="34 Thompson drive, Lokoja, Kogi, Nigeria and other texts that come in from database and google"
            />
            <LocationInput
              label="end position"
              input="Enter location or Select from map."
            />

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
              Select health condition if any
            </p>

            <SelectInput placeholder="--Condition--"
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
              Schedule Trip
            </SubmitButton>

          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewTrip;
