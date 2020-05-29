/* eslint-disable no-unused-vars */
import React from "react";
// import Router from "next/router";
import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";

const Home = ({ loggedIn, user }) => {
  // console.log("loggedIn:", loggedIn);

  return (
    <div>
      <Head>
        <title>Fasta</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <div className="" >
        <Homepage user={user} />
      </div>
    </div>
  );
};

export default Home;
