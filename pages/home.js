/* eslint-disable no-unused-vars */
import React from "react";
// import Router from "next/router";
import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";

const Home = ({ loggedIn, user, located, setLocated, location, setLocation, getUrl, trips, setTrips, reports, setReports, token }) => {
  // console.log("loggedIn:", loggedIn);
  // const name = user.fullname.split(" ")[0];
  return (
    <div>
      <Head>
        <title>Fasta</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <div className="">
        <Homepage user={user} 
        located={located} 
        setLocated={setLocated} 
        location={location}
        setLocation={setLocation}
        getUrl={getUrl}  
        trips={trips} 
        setTrips={setTrips}
        reports={reports} 
        setReports={setReports}
        token={token} />
      </div>
    </div>
  );
};

export default Home;
