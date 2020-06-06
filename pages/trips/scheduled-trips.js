/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import fetch from "node-fetch";

// import trips from "./trips.json";
import Layout from "../../components/Layout";
import TripCard from "../../components/Cards/TripCard";
import { NewTripButton } from "../../components/Buttons";


const ScheduledTrips = ({getTrips}) => {
  const [trips, setTrips] = useState(null);

  console.log(getTrips);

  useEffect(() => {
    // effect
    // setTrips(getTrips.response);
    (async() => {
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
    setTrips(getTrips.response);
    return {getTrips};
        }
        } catch(e) {
            console.log(e, "Some error in connection, Please try again!");
          return {response: e.message};
          }
    })();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Your Scheduled Trips" back>
      { trips && trips.map((trip, index) => (
        <TripCard 
          key={index}
          id={trip._id}
          origin={trip.origin}
          destination={trip.destination}
          time={trip.tripTime}
         />
      ))}

      <NewTripButton />
    </Layout>
  );
};

ScheduledTrips.getInitialProps = async (ctx) => {

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
      const getTrips = {response: e.message};
      return {getTrips};
      }
};

export default ScheduledTrips;