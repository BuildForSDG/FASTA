/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import fetch from "node-fetch";

import Layout from "../components/Layout";
import ReportCard from "../components/Cards/ReportCard";
import { NewReportButton } from "../components/Buttons";



const Reports = ({getUrl, getReports, handleToast}) => {
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
    <Layout header="Reports" back >
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
    </Layout>
  );
};

Reports.getInitialProps = async (ctx) => {

  const apiUrl = "https://fastaapp.herokuapp.com/api/v1";
  // try {
    const res = await fetch(`${apiUrl}/reports`, {
                            method: "GET", 
                            headers: { "Content-Type" : "application/json"}
                          });
    const response = await res.json();
    console.log(res.status, response);
    // if (res.status === 200) {
      const getReports = response;
      return {getReports};
    // }
    // } catch(e) {
    //     console.log(e, "Some error in connection, Please try again!");
    //     // handleToast("Error in connection", "error");
    //   }
    
  // return {};
};

export default Reports;
