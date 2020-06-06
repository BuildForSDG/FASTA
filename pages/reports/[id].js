/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import fetch from "node-fetch";


import Layout from "../../components/Layout";
import ReportCard from "../../components/Cards/ReportCard";

const Report = ({getReports}) => {

  const [report, setReport] = useState(null);

  const router = useRouter();
  const {id} = router.query;

  // const apiUrl = getUrl();
  useEffect(() => {
    // effect
  const report = getReports.response.filter(x => x["_id"] === id);
  setReport(report[0]);
    console.log(report, getReports);
    return () => {
      // cleanup
    };
  }, []);

  return (
    <Layout header="Report" back>
      {report ?
       <ReportCard 
        type={report.type}
        location={report.location}
        timestamp={report.date}
        description={report.description}
      />:<div></div>}
    </Layout>
  );
};

Report.getInitialProps = async (ctx) => {
  const apiUrl = "https://fastaapp.herokuapp.com/api/v1";
  try {
    const res = await fetch(`${apiUrl}/reports`, {
                            method: "GET", 
                            headers: { "Content-Type" : "application/json"}
                          });
    const response = await res.json();
    console.log(res.status, response);
    if (res.status === 200) {
      const getReports = response;
      return {getReports};
    }
    } catch(e) {
        console.log(e, "Some error in connection, Please try again!");
      return {};
      }
 };

export default Report;