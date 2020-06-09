/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import ScheduledTrips from "./trips/scheduled-trips";
import fetch from "node-fetch";

const Trips = ({getUrl, getTrips, token, trips, setTrips, location}) => {

  console.log(getTrips, trips);

  useEffect(() => {
    // effect
    (async () => {
    const apiUrl = getUrl();
  try {
    const res = await fetch(`${apiUrl}/trips`, {
                            method: "GET", 
                            headers: { "Content-Type" : "application/json",
                                      "Authorization": `Bearer ${token}`}
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
      // const getTrips = {response: e.message};
      const getTrips = {response: []};
      return {getTrips};
      }
      // setTrips(getTrips.response);
    })();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <ScheduledTrips trips={trips} setTrips={setTrips} getUrl={getUrl} token={token} />
  );
};

export default Trips;