import React from "react";
import styled from "styled-components";
import Report from "./Report";

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
      <Heading>Reports in your area</Heading>
      <Report title=" Accident" />
      <Report title="Shoot-out" />
      <AllReports>See All Reports</AllReports>
    </div>
  );
};

export default Reports;
