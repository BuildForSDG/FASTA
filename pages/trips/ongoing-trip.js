/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
// import fetch from "node-fetch";
import Layout from "../../components/Layout";
import MapCard from "../../components/Cards/MapCard";
import Reports from "../../components/Homepage/Reports/Reports";
import NewReport from "../../components/Homepage/NewReport";
import Map from "../../components/Map";

const Trip = (props) => {
    const [tripReports, setTripReports] = useState([]);

  const apiUrl = props.getUrl();

  useEffect(() => {
    // effect
    console.log(props.location, props.tripId);
   
    (async () => {
      try {
        const res = await fetch(`${apiUrl}/trip-info/${props.tripId}`, {
                                method: "GET", 
                                headers: { "Content-Type" : "application/json"}
                              });
        const response = await res.json();
        console.log(res.status, response);
        if (res.status === 200) {
          const tripReports = response;
          setTripReports(tripReports);
          return {tripReports};
        }
        } catch(e) {
            console.log(e, "Some error in connection, Please try again!");
            const tripReports = {response: [{_id: 0, type: "No reports at the moment!"}]};
            setTripReports(tripReports.response);
            return {tripReports};
          }
    })();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Ongoing Trip" back>
      <div className="absolute top-20 right-0 w-screen pb-10">
        {/* Add google map to MapCard */}
        <Map lat={props.location &&props.location.lat} lng={props.location && props.location.lng} />
        {/* <MapCard /> */}
        <div className="px-4">
          <Reports header="Reports on your way" reports={tripReports} />
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
