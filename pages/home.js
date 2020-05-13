import React, { useEffect } from "react";
import Router from "next/router";
import Homepage from "../components/Homepage/Homepage";

const Home = ({loggedIn}) => {
  
  console.log("loggedIn:", loggedIn);
    if (!loggedIn) Router.push("/login"); 

    // useEffect(() => {
    //   // Prefetch the login page as the user will go there after the login
    //   Router.prefetch('/login')
    // }, [])
  return (
    <div>
      <head>
        <title>Fasta</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className="h-screen flex" style={{ backgroundColor: "#F7F5F5" }}>
        <Homepage />
      </div>
    </div>
  );
};

export default Home;
