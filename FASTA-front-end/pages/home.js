import React from "react";
import Homepage from "../components/Homepage/Homepage";

import Head from 'next/head';

const Home = (props) => {
  return (
    <>

    <div>
      <head>
        <title>Fasta</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
          <meta charset='utf-8' />
          <meta http-quiv='x-UA-Compatible' content='IE=edge'/>
          <meta name='viewport' content='width=device-width,initial-scale=1,minimun-scale=1,maximum-scale=1,user-scalable=no'/>
          <meta name='description' conmtent='Description'/>
          <meta name='keywords' />
          
          <link rel="manifest" href="/manifest.json"/>
          <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/>
          <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/>
          <link rel="apple-icon" href="/apple-icon.png"></link>
          <meta name="theme-color" content="#317EFB"/>
      </head>
      <div className="h-screen flex" style={{ backgroundColor: "#F7F5F5" }}>
        <Homepage />
      </div>
    </div>
    </>
  );
};

export default Home;
