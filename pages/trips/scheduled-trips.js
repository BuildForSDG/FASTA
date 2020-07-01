/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
// import fetch from "node-fetch";

import trips from "./trips.json";
import Layout from "../../components/Layout";
import TripCard from "../../components/Cards/TripCard";
import { NewTripButton } from "../../components/Buttons";


const ScheduledTrips = () => {
  // const [trips, setTrips] = useState(null);

  useEffect(() => {
    // effect
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Your Scheduled Trips" back>
      <div className="container mx-auto md:flex flex-wrap">
        { trips.map((trip, index) => (
          <TripCard 
            key={index}
            id={trip.id}
            origin={trip.origin}
            destination={trip.destination}
            time={trip.time}
          />
        ))}

      </div>

      <NewTripButton />
    </Layout>
  );
};

export default ScheduledTrips;
