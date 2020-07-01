/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
// import fetch from "node-fetch";
import Layout from "../../components/Layout";
import MapCard from "../../components/Cards/MapCard";
// import NewReport from "../../components/Homepage/NewReport";
import { H3 } from "../../components/Text/Headings";
import ReportCard from "../../components/Cards/ReportCard";
import { NewReportButton, SubmitButton } from "../../components/Buttons";

const Trip = ({getUrl, getReports, handleToast}) => {
  const [reports, setReports] = useState(null);

  console.log(getReports.response);

  // const apiUrl = getUrl();
  useEffect(() => {
    // effect
    setReports(getReports.response);
    console.log(getReports, reports);
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Ongoing Trip" back>
      <div className="container mx-auto relative">
        <div className="absolute top-0 right-0 w-full pb-10">
          {/* Add google map to MapCard */}
          <MapCard />
          <div className="px-4">
            <div>
              <H3>Reports on your route</H3>
              <div className="md:px-4 md:w-1/2">
               {reports && reports.map((report) => (
                  <ReportCard 
                  key={report._id}
                  id={report._id}
                  type={report.type}
                  location={report.location}
                  timestamp={report.timestamp}
                  description={report.description}
                  details
                  />
                ))}
                <NewReportButton getUrl={getUrl} handleToast={handleToast} />
              </div>
            </div>
            <SubmitButton type="submit" className="w-full mt-2">
              End Trip
            </SubmitButton>
          </div>
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
