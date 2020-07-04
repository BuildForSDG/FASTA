/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
// import fetch from "node-fetch";
import Layout from "../../components/Layout";
import MapCard from "../../components/Cards/MapCard";
import Reports from "../../components/Homepage/Reports/Reports";
import NewReport from "../../components/Homepage/NewReport";
import Map from "../../components/Map";

const Trip = (props) => {

  return (
    <Layout header="Ongoing Trip" back>
      <div className="absolute top-20 right-0 w-screen pb-10">
        {/* Add google map to MapCard */}
        <Map lat={props.location &&props.location.lat} lng={props.location && props.location.lng} />
        {/* <MapCard /> */}
        <div className="px-4">
          <Reports reports={props.reports} />
          <NewReport />
        </div>

      </div>
    </Layout>
  );
};


// Trip.getInitialProps = async (ctx) => {

//   const apiUrl = "https://fastaapp.herokuapp.com/api/v1";
//   // try {
//     const res = await fetch(`${apiUrl}/reports`, {
//                             method: "GET", 
//                             headers: { "Content-Type" : "application/json"}
//                           });
//     const response = await res.json();
//     console.log(res.status, response);
//     // if (res.status === 200) {
//       const getReports = response;
//       return {getReports};
//     // }
//     // } catch(e) {
//     //     console.log(e, "Some error in connection, Please try again!");
//     //     // handleToast("Error in connection", "error");
//     //   }
    
//   // return {};
// };


export default Trip;
