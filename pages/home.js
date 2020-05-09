import React from "react"
import Homepage from "../components/Homepage/Homepage";

const Home = (props) => {
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
