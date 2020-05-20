import React from "react";
// import Router from "next/router";
import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";

const Home = ({ loggedIn, user }) => {
  // console.log("loggedIn:", loggedIn);

  return (
    <div>
      <div>
        <Head>
          <title>Fasta</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="h-screen flex" style={{ backgroundColor: "#F7F5F5" }}>
        <Homepage user={user} />
      </div>
    </div>
  );
};

export default Home;
