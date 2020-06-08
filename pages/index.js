/* eslint-disable prettier/prettier */
import Head from "next/head";
import React, { useState, useEffect } from "react";
import views from "../components/OnBoardingLayout/view";
import Layout from "../components/OnBoardingLayout/Layout";

export default function Hom() {
  const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
    // return () => {
    //   console.log('splash loaded');
    // };
  }, []);
  return (
    <div>
      <Head>
        <title>Fasta</title>
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
      </Head>
      {!loaded ? (
        <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundColor: "#AFDEB1" }}>
          <img src="/images/Logo.png" alt="" />
        </div>
      ) : (
        <Layout views={views} />
      )}
    </div>
  );
}
