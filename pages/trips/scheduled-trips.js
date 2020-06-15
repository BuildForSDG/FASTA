/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import fetch from "node-fetch";

// import trips from "./trips.json";
import Layout from "../../components/Layout";
import TripCard from "../../components/Cards/TripCard";
import { NewTripButton } from "../../components/Buttons";


const ScheduledTrips = ({loggedIn, setLoggedIn, trips, setTrips, getUrl, token}) => {
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
      {!trips && <div>No trips available!</div>}
      { trips && trips.map((trip, index) => (
        <TripCard 
          key={index}
          id={trip._id}
          origin={trip.origin}
          destination={trip.destination}
          tripTime={trip.tripTime}
          tripDistance={trip.tripDistance}
          tripDuration={trip.tripDuration}
          trips={trips}
          setTrips={setTrips}
          getUrl={getUrl}
          token={token}
         />
      ))}

      <NewTripButton />
    </Layout>
  );
};

export default ScheduledTrips;