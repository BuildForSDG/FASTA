/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { useEffect } from "react";
// import fetch from "node-fetch";

// import trips from "./trips.json";
import Layout from "../../components/Layout";
import TripCard from "../../components/Cards/TripCard";
import { NewTripButton } from "../../components/Buttons";


const ScheduledTrips = ({loggedIn, setLoggedIn, header, trips, setTrips, tripId, setTripId, getUrl, token}) => {
  console.log(trips);

  useEffect(() => {
    // effect
    // if (getTrips !== undefined) {
    //   setTrips(getTrips.response);
    // }
    
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Your Scheduled Trips" back>
      {trips && !trips.length && <div>No trips available!</div>}
      { trips && trips.map((trip, index) => (
        <TripCard 
          key={trip._id}
          id={trip._id}
          header="Reports on your way"
          origin={trip.origin}
          destination={trip.destination}
          tripTime={trip.tripTime}
          tripDistance={trip.tripDistance}
          tripDuration={trip.tripDuration}
          trips={trips}
          tripId={tripId}
          setTrips={setTrips}
          setTripId={setTripId}
          getUrl={getUrl}
          token={token}
         />
      ))}

      <NewTripButton trips={trips} />
    </Layout>
  );
};

export default ScheduledTrips;
