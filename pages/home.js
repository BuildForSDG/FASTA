/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";

const Home = (props) => {
  const { loggedIn, setLoggedIn, user, located, setLocated, locations, setLocation, getUrl, trips, setTrips, reports, setReports, token } = props;

  console.log(props);

  useEffect(() => {
    if (!loggedIn) {
      Router.push("/login");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Fasta</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <div className="">
        <Homepage 
        user={user} 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        located={located} 
        setLocated={setLocated} 
        locations={locations}
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

Home.getInitialProps = async ({store}) => {}

const mapStateToProps = state => {
  console.log("fasta is here");
  return {state};
};

const mapDispatchToProps = {LOGIN: "LOGIN"};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
