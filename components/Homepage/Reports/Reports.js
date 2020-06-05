/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Report from "./Report";
import Link from "next/link";

const Heading = styled.p`
  color: #232323;
  font-size: 20px;
  margin: 10px 0;
`;

const AllReports = styled.span`
  color: #2699fb;
  font-size: 12px;
`;

const Reports = (props) => {
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
