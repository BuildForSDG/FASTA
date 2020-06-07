/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import fetch from "node-fetch";

import Layout from "../../components/Layout";
import TripCard from "../../components/Cards/TripCard";


const Trip = ({getTrips, trips, setTrips}) => {

  const [trip, setTrip] = useState(null);
  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    // effect
    setTrips(trips);
    // const trip = getTrips.response.filter(x => x["_id"] === id);
  const trip = trips.filter(x => x["_id"] === id);
  setTrip(trip[0]);
    console.log(trip, getTrips);
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Start Trip" back>
      {trip ?
      <TripCard 
        id={trip.id}
         origin={trip.origin}
        destination={trip.destination}
        time={trip.tripTime}
      />:<div></div>}
    </Layout>
  );
};

Trip.getInitialProps = async (ctx) => {

  const apiUrl = "https://fasta-app.herokuapp.com/api/v1";
  try {
    const res = await fetch(`${apiUrl}/trips`, {
                            method: "GET", 
                            headers: { "Content-Type" : "application/json"}
                          });
    const response = await res.json();
    console.log(res.status, response);
    if (res.status === 200) {
      const getTrips = response;
      return {getTrips};
    }
    } catch(e) {
        console.log(e, "Some error in connection, Please try again!");
      return {};
      }
};

export default Trip;