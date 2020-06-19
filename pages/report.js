/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import fetch from "node-fetch";

import Layout from "../components/Layout";
import ReportCard from "../components/Cards/ReportCard";
import { NewReportButton } from "../components/Buttons";



const Reports = ({getUrl, handleToast, reports, setReports, location}) => {

  useEffect(() => {
    // effect
    console.log(location);
    const apiUrl = new URL(`${getUrl()}/reports`);
    // let lat = location ? location.lat : 6;
    // let lng = location ? location.lng : 3;
    // apiUrl.searchParams.set('lat', location.lat);
    // apiUrl.searchParams.set('lng', location.lng);
   
    (async () => {
      if (location === null) {
        const getReports = {response: [{_id: 0, type: "Your location is not available!"}]};
        setReports(getReports.response);
        return getReports;;
      }      
      apiUrl.searchParams.set('lat', location.lat);
      apiUrl.searchParams.set('lng', location.lng);
      try {
        const res = await fetch(`${apiUrl}`, {
                                method: "GET", 
                                headers: { "Content-Type" : "application/json"}
                              });
        const response = await res.json();
        console.log(res.status, response);
        if (res.status === 200) {
          const getReports = response;
          setReports(getReports.response);
          return {getReports};
        }
        } catch(e) {
            console.log(e, "Some error in connection, Please try again!");
            const getReports = {response: [{_id: 0, type: "No reports available!"}]};
            setReports(getReports.response);
            return {getReports};
          }
    })();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Reports" back >
      {reports && !reports.length ?
       <div>No reports available at the moment!</div>:
      <div>    

      {/* {!reports && <div>No reports available!</div>} */}
      {reports && reports.map((report) => (
      <ReportCard 
      key={report._id}
      id={report._id}
      type={report.type}
      location={report.location}
      timestamp={report.timestamp}
      description={report.description}
      reports={reports}
      setReports={setReports}
      details
      />
      ))}
      </div>}

      <NewReportButton getUrl={getUrl} handleToast={handleToast} />
    </Layout>
  );
};

export default Reports;
