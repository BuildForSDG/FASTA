/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import ReportCard from "../components/Cards/ReportCard";
import { NewReportButton } from "../components/Buttons";



const Reports = () => {
  const [reports, setReports] = useState(null);

  useEffect(() => {
    // effect
    return () => {
      // cleanup
    }
  }, [])

  return (
    <Layout header="Reports" back >
      <ReportCard 
        id="1"
        type="Accident"
        location="34 Kingsley avenue, Gusau."
        timestamp="2min ago"
        description="Description of report and added info... this info comes from database. truncates on second line.."
        details
      />

      <ReportCard 
        id="2"
        type="Fire"
        location="34 Kingsley avenue, Gusau."
        timestamp="20min ago"
        description="Description of report and added info... this info comes from database. truncates on second line.."
        details
      />

      <ReportCard 
        id="3"
        type="Hold-Up"
        location="34 Kingsley avenue, Gusau."
        timestamp="3min ago"
        description="Description of report and added info... this info comes from database. truncates on second line.."
        details
      />

      <ReportCard 
        id="4"
        type="Riot"
        location="34 Kingsley avenue, Gusau."
        timestamp="50min ago"
        description="Description of report and added info... this info comes from database. truncates on second line.."
        details
      />
      
      <ReportCard 
        id="5"
        type="Fire"
        location="34 Kingsley avenue, Gusau."
        timestamp="20min ago"
        description="Description of report and added info... this info comes from database. truncates on second line.."
        details
      />

      <NewReportButton />
    </Layout>
  )
}

export default Reports;
