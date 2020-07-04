/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


import Layout from "../../components/Layout";
import ReportCard from "../../components/Cards/ReportCard";

const Report = ({getReports, reports, setReports}) => {

  const [report, setReport] = useState(null);

  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    // effect
    setReports(reports);
  const report = reports.filter(x => x["_id"] === id);
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

export default Report;
