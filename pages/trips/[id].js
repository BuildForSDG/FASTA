/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import fetch from "node-fetch";

import trips from "./trips.json";
import Layout from "../../components/Layout";
import TripCard from "../../components/Cards/TripCard";


const Trip = (props) => {
  const router = useRouter();
  const {id} = router.query;

  const trip = trips[id];
  console.log(id)
  return (
    <Layout header="Start Trip" back>
      <TripCard 
        id={trip.id}
        origin={trip.origin}
        destination={trip.destination}
        time={trip.time}
      />
    </Layout>
  );
};


export default Trip;