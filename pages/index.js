import Head from "next/head";
import React, { useState, useEffect } from "react";
import views from "../components/OnBoardingLayout/view";
import Layout from "../components/OnBoardingLayout/Layout";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => {
      console.log('splash loaded');
    };
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!loaded ? (
        <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundColor: '#AFDEB1' }}>
          <img src="/images/Logo.png" alt="" />
        </div>
      ) : (
        <Layout views={views} />
      )}
    </div>
  );
}
