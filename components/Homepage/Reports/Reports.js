/* eslint-disable no-unused-vars */
import React from "react";
import Report from "./Report";
import Link from "next/link";
import styled from "styled-components";

const Text = styled(TextSmall)`
  font-size: 20px;
  margin: 5px 0;
`;

const Reports = () => {
  return (
    <div>
      {/* fetch Reports from report api */}
      {/* Show only the two latest reports */}
      <Heading>Reports in your area</Heading>
      <Report
        title=" Accident"
        description="Along Olu-Obansanjo road. cars are on fire avoid the area, fire fighters are at the scene. Traffic is..."
      />
      <Report
        title="Shoot-out"
        description="Along Olu-Obansanjo road. cars are on fire avoid the area, fire fighters are at the scene. Traffic is..."
      />
      <Link href="/report">
        <a>
          <AllReports>See All Reports</AllReports>
        </a>
      </Link>
    </div>
  );
};

export default Reports;
