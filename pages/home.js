import React from "react";
import Head from "next/head";
import Homepage from "../components/Homepage/Homepage";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Fasta</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <div className="" >
        <Homepage />
      </div>
    </div>
  );
};

export default Home;
