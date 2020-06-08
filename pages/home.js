/* eslint-disable no-unused-vars */
import React from "react";
// import Router from "next/router";
import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";

const Home = ({ loggedIn, user, setLocated, located }) => {
  // console.log("loggedIn:", loggedIn);
  const name = user.fullname.split(" ")[0];
  return (
    <div>
      <Head>
        <title>Fasta</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <div className="">
        <Homepage user={name} located={located} setLocated={setLocated} />
      </div>
    </div>
  );
};

export default Home;
